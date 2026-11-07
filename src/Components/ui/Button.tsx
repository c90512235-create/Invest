import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const styles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: 'var(--is-emerald-500)',
    color: 'var(--is-navy-950)',
    fontWeight: 600,
  },
  secondary: {
    backgroundColor: 'transparent',
    color: 'var(--is-white)',
    border: '1px solid var(--is-navy-700)',
    fontWeight: 600,
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--is-emerald-400)',
    fontWeight: 600,
  },
};

const sizes: Record<ButtonSize, React.CSSProperties> = {
  md: { padding: '0.75rem 1.5rem', fontSize: 'var(--fs-sm)' },
  lg: { padding: '0.9rem 2rem', fontSize: 'var(--fs-base)' },
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    borderRadius: '999px',
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...styles[variant],
    ...sizes[size],
  };

  if (to) {
    return (
      <Link to={to} style={baseStyle}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" style={baseStyle}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={baseStyle}>
      {children}
    </button>
  );
}
