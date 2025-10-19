import { useEffect, useState } from 'react';

const codeLines = [
  'const developer = {',
  '  name: "Thrisha Kannan",',
  '  role: "Software Engineer",',
  '  company: "Shopify",',
  '  achievements: [',
  '    "50K+ Users on Cravings",',
  '    "CTO & Founder",',
  '    "BTech CUSAT 2024"',
  '  ],',
  '  skills: ["React", "Node.js", "TypeScript"]',
  '};',
];

const CodeBlock3D = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          setTimeout(() => setVisibleLines(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative max-w-2xl mx-auto p-6 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 font-mono text-sm overflow-hidden"
      style={{
        transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(14, 165, 233, 0.2)',
      }}
    >
      {/* Scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary)) 2px, hsl(var(--primary)) 4px)',
          animation: 'scan 8s linear infinite',
        }}
      />

      {/* Code content */}
      <div className="space-y-1 relative z-10">
        {codeLines.map((line, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ${
              index < visibleLines 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-4'
            }`}
            style={{
              transitionDelay: `${index * 50}ms`,
            }}
          >
            <span className="text-muted-foreground mr-4">{(index + 1).toString().padStart(2, '0')}</span>
            <span className={
              line.includes('const') || line.includes('name') || line.includes('role') ? 'text-accent' :
              line.includes('Thrisha') || line.includes('Shopify') || line.includes('Engineer') ? 'text-primary' :
              line.includes('50K+') || line.includes('CTO') ? 'text-destructive' :
              'text-foreground'
            }>
              {line}
            </span>
          </div>
        ))}
      </div>

      {/* Glowing cursor */}
      {visibleLines <= codeLines.length && (
        <div 
          className="absolute w-2 h-4 bg-primary animate-pulse"
          style={{
            left: `${20 + (codeLines[Math.min(visibleLines - 1, codeLines.length - 1)]?.length || 0) * 8}px`,
            top: `${24 + visibleLines * 20}px`,
          }}
        />
      )}
    </div>
  );
};

export default CodeBlock3D;
