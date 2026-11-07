import { UserPlus, BookOpen, LineChart, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const steps = [
  {
    icon: UserPlus,
    title: 'Create your account',
    description: 'Register securely and set your preferred currency — UGX or USD.',
  },
  {
    icon: BookOpen,
    title: 'Learn the foundations',
    description: 'Study original lessons on budgeting, risk, diversification, markets and long-term planning.',
  },
  {
    icon: LineChart,
    title: 'Practise with virtual money',
    description: 'Use the simulator to make virtual buy and sell decisions — no real money involved.',
  },
  {
    icon: ShieldCheck,
    title: 'Build responsible habits',
    description: 'Understand risk disclosures and make informed decisions before considering real investments.',
  },
];

export function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="A structured path from learning to practice"
          description="Invest Smart is designed to help you understand finance before you make real-world decisions."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                style={{
                  backgroundColor: 'var(--is-navy-800)',
                  border: '1px solid var(--is-navy-700)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: 'rgba(16,185,129,0.12)',
                    color: 'var(--is-emerald-400)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  <Icon size={24} />
                </div>
                <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--is-emerald-400)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
                  STEP {index + 1}
                </p>
                <h3 style={{ fontSize: 'var(--fs-lg)', marginBottom: 'var(--space-2)' }}>{step.title}</h3>
                <p className="text-grey" style={{ fontSize: 'var(--fs-sm)', lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
