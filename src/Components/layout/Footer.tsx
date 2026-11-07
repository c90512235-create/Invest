import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Globe } from 'lucide-react';

const footerColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Courses', to: '/courses' },
      { label: 'Education Centre', to: '/education' },
      { label: 'Virtual Simulator', to: '/simulator' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Invest Smart', to: '/about' },
      { label: 'About Rayar Web Studio', to: '/company' },
      { label: 'Contact', to: '/contact' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Risk Disclosure', to: '/risk-disclosure' },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--is-navy-950)',
        borderTop: '1px solid var(--is-navy-800)',
        paddingTop: 'var(--space-16)',
        paddingBottom: 'var(--space-8)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-12)',
            marginBottom: 'var(--space-12)',
          }}
        >
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: 'var(--space-4)' }}>
              <span
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  backgroundColor: 'var(--is-emerald-500)',
                  color: 'var(--is-navy-950)',
                }}
              >
                <TrendingUp size={18} strokeWidth={2.5} />
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem' }}>
                Invest<span style={{ color: 'var(--is-emerald-400)' }}>Smart</span>
              </span>
            </Link>
            <p className="text-grey" style={{ fontSize: 'var(--fs-sm)', maxWidth: 280, lineHeight: 1.7 }}>
              Learn Smart. Invest Wisely. Build Your Future.
            </p>
            <p className="text-grey" style={{ fontSize: 'var(--fs-xs)', marginTop: 'var(--space-4)', maxWidth: 300, lineHeight: 1.7 }}>
              Invest Smart is a digital financial education platform. Nothing on this website constitutes financial advice.
              All virtual simulator figures are simulated.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-4)', color: 'var(--is-white)' }}>
                {col.title}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-grey"
                      style={{ fontSize: 'var(--fs-sm)', transition: 'color 0.2s' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 style={{ fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-4)', color: 'var(--is-white)' }}>
              Contact
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="text-grey">
                <Mail size={16} />
                <span style={{ fontSize: 'var(--fs-sm)' }}>hello@investsmart.example</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="text-grey">
                <Globe size={16} />
                <span style={{ fontSize: 'var(--fs-sm)' }}>Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--is-navy-800)',
            paddingTop: 'var(--space-8)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            alignItems: 'center',
          }}
        >
          <p className="text-grey" style={{ fontSize: 'var(--fs-xs)' }}>
            © {new Date().getFullYear()} Invest Smart. All rights reserved.
          </p>
          <p className="text-grey" style={{ fontSize: 'var(--fs-xs)' }}>
            Developed by{' '}
            <a
              href="https://rayarwebstudio.example"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--is-emerald-400)', fontWeight: 600 }}
            >
              Rayar Web Studio
            </a>
          </p>
        </div>
        <p className="text-grey" style={{ fontSize: 'var(--fs-xs)', marginTop: 'var(--space-4)', textAlign: 'center' }}>
          Invest Smart is a digital financial education platform developed by Rayar Web Studio.
        </p>
      </div>
    </footer>
  );
}
