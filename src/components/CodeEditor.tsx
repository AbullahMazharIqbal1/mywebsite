import { useEffect, useState } from 'react';

const CodeEditor = () => {
  const [typedCode, setTypedCode] = useState('');
  
  const codeContent = `document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    const button = document.createElement("button");
    button.textContent = \`Click me: \${count}\`;
    
    button.addEventListener("click", () => {
        count++;
        button.textContent = \`Click me: \${count}\`;
    });
    
    document.body.appendChild(button);
});`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < codeContent.length) {
        setTypedCode(codeContent.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Reset after a pause
        setTimeout(() => {
          setTypedCode('');
          index = 0;
          const newTimer = setInterval(() => {
            if (index < codeContent.length) {
              setTypedCode(codeContent.slice(0, index + 1));
              index++;
            } else {
              clearInterval(newTimer);
            }
          }, 30);
        }, 3000);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const formatCode = (code: string) => {
    return code.split('\n').map((line, lineIndex) => {
      const parts = [];
      let currentIndex = 0;
      
      // Keywords
      const keywords = ['document', 'addEventListener', 'let', 'const', 'function', 'return', 'if', 'else'];
      const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
      
      // Strings
      const stringRegex = /(["'`])((?:(?!\1)[^\\]|\\.)*)(\1)/g;
      
      // Functions
      const functionRegex = /(\w+)(\s*\()/g;
      
      let match;
      const segments = [];
      
      // Find all matches and their positions
      const allMatches = [];
      
      while ((match = keywordRegex.exec(line)) !== null) {
        allMatches.push({ type: 'keyword', start: match.index, end: match.index + match[0].length, text: match[0] });
      }
      
      while ((match = stringRegex.exec(line)) !== null) {
        allMatches.push({ type: 'string', start: match.index, end: match.index + match[0].length, text: match[0] });
      }
      
      while ((match = functionRegex.exec(line)) !== null) {
        allMatches.push({ type: 'function', start: match.index, end: match.index + match[1].length, text: match[1] });
      }
      
      // Sort by start position
      allMatches.sort((a, b) => a.start - b.start);
      
      // Build segments
      let lastEnd = 0;
      allMatches.forEach(match => {
        if (match.start > lastEnd) {
          segments.push({ type: 'normal', text: line.slice(lastEnd, match.start) });
        }
        segments.push(match);
        lastEnd = match.end;
      });
      
      if (lastEnd < line.length) {
        segments.push({ type: 'normal', text: line.slice(lastEnd) });
      }
      
      return (
        <div key={lineIndex} className="flex">
          <span className="text-muted-foreground w-8 text-right mr-4 select-none">
            {lineIndex + 1}
          </span>
          <span className="flex-1">
            {segments.map((segment, segIndex) => {
              switch (segment.type) {
                case 'keyword':
                  return <span key={segIndex} className="text-purple-400">{segment.text}</span>;
                case 'string':
                  return <span key={segIndex} className="text-green-400">{segment.text}</span>;
                case 'function':
                  return <span key={segIndex} className="text-yellow-400">{segment.text}</span>;
                default:
                  return <span key={segIndex} className="text-gray-300">{segment.text}</span>;
              }
            })}
          </span>
        </div>
      );
    });
  };

  return (
    <div className="relative">
      {/* Browser Frame */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl code-glow animate-float">
        {/* Browser Header */}
        <div className="bg-secondary border-b border-border px-4 py-3 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-input rounded-lg px-3 py-1 text-sm text-muted-foreground">
              script.js
            </div>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <button className="hover:text-foreground transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12l-4-4h8l-4 4z" />
              </svg>
            </button>
            <button className="hover:text-foreground transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Code Content */}
        <div className="bg-gray-900 p-6 font-mono text-sm min-h-80 relative overflow-hidden">
          <div className="space-y-1">
            {formatCode(typedCode)}
          </div>
          
          {/* Typing cursor */}
          <span className="animate-pulse bg-primary w-0.5 h-4 inline-block ml-1" />
          
          {/* Security Badge */}
          <div className="absolute bottom-4 left-4 bg-yellow-500/20 border border-yellow-500/40 rounded-lg p-2 flex items-center space-x-2">
            <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs text-yellow-400 font-medium">Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;