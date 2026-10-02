import React from 'react';

interface FormulaBadgeProps {
  formula: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Converts subscript and superscript LaTeX notations to Unicode or HTML equivalents.
 */
function toSubscript(numStr: string): string {
  const map: Record<string, string> = {
    '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
    '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
    '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
    'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ',
    'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
    'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ',
    'v': 'ᵥ', 'x': 'ₓ'
  };
  return numStr.split('').map(ch => map[ch] || ch).join('');
}

function toSuperscript(numStr: string): string {
  const map: Record<string, string> = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
    '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
    'n': 'ⁿ', 'i': 'ⁱ'
  };
  return numStr.split('').map(ch => map[ch] || ch).join('');
}

/**
 * Clean up LaTeX formula strings into human-readable scientific notation.
 */
export function formatChemicalFormula(raw: string): string {
  if (!raw) return '';
  let str = raw.trim();

  // Replace \xrightarrow{\text{...}} or \xrightarrow{...} with ──(...)──➔
  str = str.replace(/\\xrightarrow\s*\{\\text\{([^}]+)\}\}/g, ' ──($1)──➔ ');
  str = str.replace(/\\xrightarrow\s*\{([^}]+)\}/g, ' ──($1)──➔ ');

  // Replace \underset{...}{\overset{...}{\rightleftharpoons}}
  str = str.replace(/\\underset\{([^}]+)\}\{\\overset\{([^}]+)\}\{\\rightleftharpoons\}\}/g, ' ⇌ [$2 / $1] ');

  // Standard arrows and symbols
  str = str.replace(/\\rightarrow/g, ' ➔ ');
  str = str.replace(/\\to/g, ' ➔ ');
  str = str.replace(/\\rightleftharpoons/g, ' ⇌ ');
  str = str.replace(/\\cdot/g, '·');
  str = str.replace(/\\propto/g, ' ∝ ');
  str = str.replace(/\\approx/g, ' ≈ ');
  str = str.replace(/\\sum/g, '∑ ');
  str = str.replace(/\\Delta/g, 'Δ');
  str = str.replace(/\\quad/g, ' ');
  str = str.replace(/\\,/g, ' ');
  str = str.replace(/\\theta/g, 'θ');
  str = str.replace(/0\^\s*\\circ\s*\\text\{C\}/g, '0°C');
  str = str.replace(/\^\s*\\circ/g, '°');

  // Fractions: \frac{a}{b} -> (a / b)
  str = str.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)');

  // Square roots: \sqrt{...} -> √(...)
  str = str.replace(/\\sqrt\{([^}]+)\}/g, '√($1)');

  // Strip remaining \text{...}
  str = str.replace(/\\text\{([^}]+)\}/g, '$1');

  // Convert subscripts like _{12} or _2
  str = str.replace(/_\{([0-9a-zA-Z+-]+)\}/g, (_, sub) => toSubscript(sub));
  str = str.replace(/_([0-9a-zA-Z+-])/g, (_, sub) => toSubscript(sub));

  // Convert superscripts like ^{2} or ^2
  str = str.replace(/\^\{([0-9a-zA-Z+-]+)\}/g, (_, sup) => toSuperscript(sup));
  str = str.replace(/\^([0-9a-zA-Z+-])/g, (_, sup) => toSuperscript(sup));

  // Strip any leftover stray backslashes or empty braces
  str = str.replace(/\\([a-zA-Z]+)/g, '$1');
  str = str.replace(/[{}]/g, '');

  // Normalize multi-spaces
  str = str.replace(/\s+/g, ' ').trim();

  return str;
}

/**
 * FormulaBadge component renders chemical/math equations with:
 * - Proper chemical subscripts/superscripts
 * - Highlighting of reaction catalysts & conditions
 * - Clean glowing scientific badge typography
 */
export const FormulaBadge: React.FC<FormulaBadgeProps> = ({
  formula,
  className = '',
  size = 'md'
}) => {
  if (!formula) return null;

  const formatted = formatChemicalFormula(formula);

  // Check if there is a reaction arrow with condition: ──(...)──➔
  const reactionMatch = formatted.match(/(.*?)──\((.*?)\)──➔(.*)/);

  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs md:text-sm px-3 py-1',
    lg: 'text-sm md:text-base px-4 py-1.5'
  }[size];

  if (reactionMatch) {
    const reactants = reactionMatch[1].trim();
    const condition = reactionMatch[2].trim();
    const products = reactionMatch[3].trim();

    return (
      <div 
        className={`inline-flex flex-wrap items-center gap-2 rounded-xl bg-amber-950/70 border border-amber-800/80 text-amber-200 shadow-md font-mono select-text ${sizeClasses} ${className}`}
      >
        <span className="font-semibold text-white tracking-wide">{reactants}</span>
        
        {/* Animated reaction bridge */}
        <span className="inline-flex flex-col items-center justify-center px-1">
          {condition && (
            <span className="text-[10px] md:text-[11px] font-sans text-cyan-300 font-bold border-b border-cyan-500/50 px-1 leading-tight">
              {condition}
            </span>
          )}
          <span className="text-amber-400 font-black text-sm leading-none mt-0.5">➔</span>
        </span>

        <span className="font-semibold text-white tracking-wide">{products}</span>
      </div>
    );
  }

  return (
    <div 
      className={`inline-flex items-center rounded-xl bg-amber-950/70 border border-amber-800/80 text-amber-200 shadow-md font-mono select-text font-semibold tracking-wide ${sizeClasses} ${className}`}
    >
      {formatted}
    </div>
  );
};
