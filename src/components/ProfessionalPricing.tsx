import { motion } from "framer-motion";
import { type ReactElement, useMemo, useState } from "react";
import personaConfig from "../persona/persona-config";
import { usePersona } from "../persona/persona-state";

type PricingAmount = {
  readonly min: number;
  readonly max?: number;
  readonly plus?: boolean;
};

type PricingMarket = "local" | "international";

type PricingTier = {
  readonly name: string;
  readonly description: string;
  readonly rates: {
    readonly local: PricingAmount;
    readonly international: PricingAmount;
  };
  readonly included: readonly string[];
  readonly excluded?: readonly string[];
  readonly timeline?: string;
  readonly revisions?: string;
  readonly ctaLabel: string;
};

type PricingAddOn = {
  readonly name: string;
  readonly rates: {
    readonly local: PricingAmount;
    readonly international: PricingAmount;
  };
};

type PricingCopy = {
  readonly title: string;
  readonly description: string;
  readonly tiers: readonly PricingTier[];
  readonly addOns: readonly PricingAddOn[];
  readonly paymentTerms: readonly string[];
  readonly currencyPolicy: string;
  readonly disclaimer: string;
  readonly ctaHref: string;
};

const formatMoney = (currency: "MYR" | "USD", value: number): string => {
  const formatter = new Intl.NumberFormat(currency === "MYR" ? "en-MY" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });
  return formatter.format(value);
};

const formatAmount = (currency: "MYR" | "USD", amount: PricingAmount): string => {
  if (typeof amount.max === "number") {
    return `${formatMoney(currency, amount.min)} – ${formatMoney(currency, amount.max)}${amount.plus ? "+" : ""}`;
  }
  if (amount.plus) {
    return `${formatMoney(currency, amount.min)}+`;
  }
  return formatMoney(currency, amount.min);
};

const ProfessionalPricing = (): ReactElement | null => {
  const { persona } = usePersona();
  const pricingCopy = personaConfig[persona].pricing as PricingCopy | undefined;
  const [market, setMarket] = useState<PricingMarket>("local");

  if (!pricingCopy) {
    return null;
  }

  const currency = useMemo<"MYR" | "USD">(() => (market === "local" ? "MYR" : "USD"), [market]);
  const marketLabel = market === "local" ? "Local (MYR)" : "International (USD)";

  return (
    <section id="pricing" className="min-h-[100dvh] pt-24 md:pt-28 pb-16 overflow-hidden bg-surface-container-low flex flex-col justify-center">
      <div className="container-custom">
        <div className="max-w-3xl mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="type-display-section mb-4"
          >
            {pricingCopy.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-muted text-base sm:text-lg leading-relaxed"
          >
            {pricingCopy.description}
          </motion.p>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="inline-flex rounded-pill border border-border-subtle bg-surface p-1 w-fit">
              <button
                type="button"
                onClick={() => setMarket("local")}
                className={`px-4 py-2 rounded-pill text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                  market === "local" ? "bg-primary/10 text-primary" : "text-muted hover:text-foreground"
                }`}
              >
                Local (MYR)
              </button>
              <button
                type="button"
                onClick={() => setMarket("international")}
                className={`px-4 py-2 rounded-pill text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                  market === "international" ? "bg-secondary-container/35 text-secondary" : "text-muted hover:text-foreground"
                }`}
              >
                International (USD)
              </button>
            </div>
            <p className="text-muted text-xs leading-relaxed max-w-xl">{pricingCopy.currencyPolicy}</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 bg-surface border border-border-subtle shadow-ring rounded-xl p-5"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Not Included</p>
            <p className="text-muted text-sm leading-relaxed mt-2">
              Domain & hosting fees are paid by the client directly to the provider. I can help set them up during deployment.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingCopy.tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="bg-surface border border-border-subtle shadow-ring rounded-xl p-8 flex flex-col"
            >
              <div className="flex items-start justify-between gap-6 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-foreground tracking-[-0.04em]">{tier.name}</h3>
                  <p className="text-muted text-sm leading-relaxed mt-2">{tier.description}</p>
                </div>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
                    <path
                      d="M7 8h10M7 12h10M7 16h6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>

              <div className="bg-surface-2 border border-border-subtle rounded-xl p-4 mb-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">{marketLabel}</p>
                <p className="text-2xl font-bold text-foreground tracking-[-0.04em] mt-2">
                  {formatAmount(currency, tier.rates[market])}
                </p>
                {(tier.timeline || tier.revisions) && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tier.timeline && (
                      <span className="bg-surface text-muted border border-border-subtle text-[10px] px-3 py-1 rounded-pill font-semibold uppercase tracking-[0.12em]">
                        {tier.timeline}
                      </span>
                    )}
                    {tier.revisions && (
                      <span className="bg-surface text-muted border border-border-subtle text-[10px] px-3 py-1 rounded-pill font-semibold uppercase tracking-[0.12em]">
                        {tier.revisions}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <ul className="space-y-3 text-sm text-muted leading-relaxed mb-8">
                {tier.included.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-primary" aria-hidden="true">
                      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                        <path
                          d="M5 10.5l3 3L15 6.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>

              {tier.excluded && tier.excluded.length > 0 && (
                <div className="border-t border-border-subtle pt-6 mb-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted mb-3">Not included</p>
                  <ul className="space-y-2 text-xs text-muted leading-relaxed">
                    {tier.excluded.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 text-muted" aria-hidden="true">
                          <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                            <path
                              d="M6 6l8 8M14 6l-8 8"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a href={pricingCopy.ctaHref} className="btn-primary w-full justify-center mt-auto">
                {tier.ctaLabel}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-surface border border-border-subtle shadow-ring rounded-xl p-8"
          >
            <div className="flex items-center justify-between gap-6 mb-6">
              <h3 className="text-xl font-bold text-foreground tracking-[-0.04em]">Add-Ons</h3>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">{marketLabel}</span>
            </div>
            <div className="divide-y divide-border-subtle">
              {pricingCopy.addOns.map((addOn) => (
                <div key={addOn.name} className="py-4 flex items-start justify-between gap-6">
                  <p className="text-sm text-foreground/90">{addOn.name}</p>
                  <p className="text-sm font-semibold text-foreground whitespace-nowrap">
                    {formatAmount(currency, addOn.rates[market])}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-5 bg-surface border border-border-subtle shadow-ring rounded-xl p-8"
          >
            <h3 className="text-xl font-bold text-foreground tracking-[-0.04em] mb-6">Payment Terms</h3>
            <ul className="space-y-3 text-sm text-muted leading-relaxed">
              {pricingCopy.paymentTerms.map((term) => (
                <li key={term} className="flex gap-3">
                  <span className="mt-1 text-primary" aria-hidden="true">
                    <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                      <path
                        d="M5 10.5l3 3L15 6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="flex-1">{term}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-10 md:mt-12 max-w-3xl"
        >
          <p className="text-muted text-sm leading-relaxed">{pricingCopy.disclaimer}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalPricing;
