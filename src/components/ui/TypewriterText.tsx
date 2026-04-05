import { useEffect, useState, type ReactElement } from "react";
import { motion, type Variants } from "framer-motion";

type TypewriterTextProps = {
  readonly text: string;
  readonly startDelayMs?: number;
  readonly charIntervalMs?: number;
  readonly cursor?: boolean;
  readonly cursorBlinkMs?: number;
  readonly className?: string;
};

const DEFAULT_START_DELAY_MS: number = 150;
const DEFAULT_CHAR_INTERVAL_MS: number = 40;
const DEFAULT_CURSOR_BLINK_MS: number = 500;
const DEFAULT_CURSOR_HIDE_AFTER_DONE_MS: number = 1400;

const TypewriterText = ({
  text,
  startDelayMs = DEFAULT_START_DELAY_MS,
  charIntervalMs = DEFAULT_CHAR_INTERVAL_MS,
  cursor = true,
  cursorBlinkMs = DEFAULT_CURSOR_BLINK_MS,
  className = "",
}: TypewriterTextProps): ReactElement => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: startDelayMs / 1000,
        staggerChildren: charIntervalMs / 1000,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { display: "none", opacity: 0 },
    visible: { display: "inline", opacity: 1 },
  };

  useEffect(() => {
    if (!cursor) {
      setCursorVisible(false);
      return;
    }

    setCursorVisible(true);
    const blinkTimer: number = window.setInterval(() => {
      setCursorVisible((previous: boolean) => !previous);
    }, cursorBlinkMs);

    if (isDone) {
      const hideTimer: number = window.setTimeout(() => {
        window.clearInterval(blinkTimer);
        setCursorVisible(false);
      }, DEFAULT_CURSOR_HIDE_AFTER_DONE_MS);

      return () => {
        window.clearInterval(blinkTimer);
        window.clearTimeout(hideTimer);
      };
    }

    return () => {
      window.clearInterval(blinkTimer);
    };
  }, [cursor, cursorBlinkMs, isDone]);

  const characters: string[] = text.split("");

  useEffect(() => {
    setIsDone(false);
  }, [text]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        key={text}
        aria-hidden="true"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setIsDone(true)}
      >
        {characters.map((char: string, index: number) => (
          <motion.span key={index} variants={childVariants}>
            {char}
          </motion.span>
        ))}
      </motion.span>
      {cursor ? (
        <span aria-hidden="true" className="inline-block align-baseline -ml-px">
          {cursorVisible ? "▍" : ""}
        </span>
      ) : null}
    </span>
  );
};

export default TypewriterText;
