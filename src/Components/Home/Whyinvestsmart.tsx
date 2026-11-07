import { GraduationCap, Globe2, Shield, MonitorSmartphone, ChartNoAxesCombined, BadgeCheck } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const benefits = [
  {
    icon: GraduationCap,
    title: 'Original educational content',
    description: 'Structured lessons written for clarity — not copied course material.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Virtual investment practice',
    description: 'A risk-free simulator with UGX 1,000,000 in simulated starting balance.',
  },
  {
    icon: Globe2,
    title: 'UGX & USD support',
    description: 'Currency-aware pricing and educational examples for international learners.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive by design',
    description: 'A consistent experience across desktop, tablet and mobile devices.',
  },
  {
    icon: Shield,
    title: 'Security-first architecture',
    description: 'Role-based access, protected admin routes and Firebase security rules planned for Phase 3.',
  },
  {
    icon: BadgeCheck,
    title: 'Transparent limitations',
    description: 'Clear labels distinguish education, simulation, pending integrations and unavailable services.',
  },
];

export function WhyInvestSmart() {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Why Invest Smart"
          title="Education built around clarity and responsibility"
          description="No hype. No guaranteed-return promises. A professional learning environment designed for long-term understanding."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  gap: 'var(--space-4)',
                  backgroundColor: 'var(--is-navy-800)',
                  border: '1px solid var(--is-navy-700)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    display: 'grid',
                    placeItems: 'center',
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    backgroundColor: 'rgba(16,185,129,0.12)',
                    color: 'var(--is-emerald-400)',
                  }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: 'var(--fs-base)', marginBottom: 'var(--space-2)' }}>{item.title}</h3>
                  <p className="text-grey" style={{ fontSize: 'var(--fs-sm)', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
