import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Education', to: '/education' },
  { label: 'Simulator', to: '/simulator' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
    color: isActive ? 'var(--is-emerald-400)' : 'var(--is-grey-300)',
    fontSize: 'var(--fs-sm)',
    fontWeight: 500,
    transition: 'color 0.2s',
    padding: '0.5rem 0',
  });

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(10, 22, 40, 0.85)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--is-navy-800)',
      }}
    >
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 'var(--nav-height)',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span
            style={{
              display: 'grid',
              placeItems: 'center',
              width: 36,
              height: 36,
              borderRadius: 10,
              backgroundColor: 'var(--is-emerald-500)',
              color: 'var(--is-navy-950)',
            }}
          >
            <TrendingUp size={20} strokeWidth={2.5} />
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.15rem',
              letterSpacing: '-0.02em',
            }}
          >
            Invest<span style={{ color: 'var(--is-emerald-400)' }}>Smart</span>
          </span>
        </Link>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-8)',
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} style={linkStyle} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }} className="nav-actions">
          <Button variant="ghost" size="md" to="/login">
            Log in
          </Button>
          <Button variant="primary" size="md" to="/register">
            Get Started
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            background: 'transparent',
            color: 'var(--is-white)',
            padding: '0.5rem',
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div
          className="nav-mobile"
          style={{
            display: 'none',
            padding: 'var(--space-4) var(--space-6) var(--space-6)',
            borderTop: '1px solid var(--is-navy-800)',
            backgroundColor: 'var(--is-navy-900)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={linkStyle}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
              <Button variant="secondary" size="md" to="/login">
                Log in
              </Button>
              <Button variant="primary" size="md" to="/register">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-actions { display: none !important; }
          .nav-toggle { display: block !important; }
          .nav-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
            }
