import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const codeSnippets = [
  { text: "> Building what is currently 404", type: "info" },
  { text: "Pair programming: enabled", type: "info" },
  { text: 'ERROR: No space left for "impossible"', type: "error" },
  { text: "✅ Status 200 on critical tasks", type: "success" },
];

const TerminalTyping = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentSnippet = codeSnippets[currentIndex];

    if (isTyping && displayText.length < currentSnippet.text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentSnippet.text.slice(0, displayText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isTyping) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 1500);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setIsTyping(true);
        setCurrentIndex((prev) => (prev + 1) % codeSnippets.length);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping, currentIndex]);

  const currentType = codeSnippets[currentIndex].type;
  const colorClass =
    currentType === "error"
      ? "text-destructive"
      : currentType === "success"
        ? "text-primary"
        : "text-accent";

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 font-mono text-sm">
      <Terminal className="h-4 w-4 text-muted-foreground" />
      <span className={colorClass}>
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
};

export default TerminalTyping;
