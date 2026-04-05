import { useEffect, useMemo, useState, type ReactElement } from "react";

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
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);
  const isDone: boolean = visibleCount >= text.length;
  const visibleText: string = useMemo(() => text.slice(0, visibleCount), [text, visibleCount]);
  useEffect(() => {
    setVisibleCount(0);
    let typingTimer: number = 0;
    let stopTimer: number = 0;
    const startTimer: number = window.setTimeout(() => {
      typingTimer = window.setInterval(() => {
        setVisibleCount((previous: number) => {
          const next: number = previous + 1;
          return next > text.length ? text.length : next;
        });
      }, charIntervalMs);
      stopTimer = window.setTimeout(() => {
        window.clearInterval(typingTimer);
        setVisibleCount(text.length);
      }, Math.max(0, text.length) * charIntervalMs + charIntervalMs);
    }, startDelayMs);
    return () => {
      window.clearTimeout(startTimer);
      window.clearInterval(typingTimer);
      window.clearTimeout(stopTimer);
    };
  }, [text, startDelayMs, charIntervalMs]);
  useEffect(() => {
    if (!cursor) {
      setCursorVisible(false);
      return;
    }
    setCursorVisible(true);
    const blinkTimer: number = window.setInterval(() => {
      setCursorVisible((previous: boolean) => !previous);
    }, cursorBlinkMs);
    if (!isDone) {
      return () => {
        window.clearInterval(blinkTimer);
      };
    }
    const hideTimer: number = window.setTimeout(() => {
      window.clearInterval(blinkTimer);
      setCursorVisible(false);
    }, DEFAULT_CURSOR_HIDE_AFTER_DONE_MS);
    return () => {
      window.clearInterval(blinkTimer);
      window.clearTimeout(hideTimer);
    };
  }, [cursor, cursorBlinkMs, isDone]);
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{visibleText}</span>
      {cursor ? (
        <span aria-hidden="true" className="inline-block align-baseline -ml-px">
          {cursorVisible ? "▍" : ""}
        </span>
      ) : null}
    </span>
  );
};

export default TypewriterText;
