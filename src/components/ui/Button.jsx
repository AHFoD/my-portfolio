import { motion } from "framer-motion";

const VARIANT_CLASS_BY_KEY = {
  primary: "bg-primary text-on-primary hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-4px_4px_0px_0px_var(--fr-tactile-primary)] border border-transparent hover:bg-transparent hover:text-primary hover:border-primary",
  frosted: "bg-surface text-foreground border border-border hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-4px_4px_0px_0px_var(--fr-color-text)]",
  ghost: "bg-transparent text-foreground border border-border hover:bg-surface hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-4px_4px_0px_0px_var(--fr-color-text)]",
  blue: "bg-primary text-on-primary border border-transparent hover:bg-transparent hover:text-primary hover:border-primary hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-4px_4px_0px_0px_var(--fr-tactile-primary)]",
};

const SIZE_CLASS_BY_KEY = {
  md: "px-6 py-3 text-sm sm:text-base rounded-none uppercase font-bold tracking-wider",
  sm: "px-4 py-2 text-xs rounded-none uppercase font-bold tracking-wider",
};

const resolveVariantKey = ({ primary, variant }) => {
  if (variant) {
    return variant;
  }
  if (primary === true) {
    return "primary";
  }
  if (primary === false) {
    return "ghost";
  }
  return "primary";
};

const resolveSizeKey = ({ size, small }) => {
  if (size) {
    return size;
  }
  if (small) {
    return "sm";
  }
  return "md";
};

const Button = ({
  children,
  href,
  primary,
  variant,
  size,
  small,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  const variantKey = resolveVariantKey({ primary, variant });
  const sizeKey = resolveSizeKey({ size, small });
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium transition-[transform,opacity,background-color,border-color,color,box-shadow] focus-visible:outline-none focus-visible:shadow-ring disabled:opacity-50 disabled:pointer-events-none";
  const widthClasses = fullWidth ? "w-full" : "inline-flex";
  const variantClasses = VARIANT_CLASS_BY_KEY[variantKey] ?? VARIANT_CLASS_BY_KEY.primary;
  const sizeClasses = SIZE_CLASS_BY_KEY[sizeKey] ?? SIZE_CLASS_BY_KEY.md;
  const buttonClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${widthClasses} ${className}`;
  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };
  if (href) {
    return (
      <motion.a
        href={disabled ? undefined : href}
        onClick={handleClick}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        className={buttonClasses}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={buttonClasses}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
