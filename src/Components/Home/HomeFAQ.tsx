import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const faqs = [
  {
    q: 'Is Invest Smart a licensed investment company?',
    a: 'No. Invest Smart is a digital financial education platform. It does not manage money, provide financial advice or execute real investment transactions. Any future real-money services would only be introduced through appropriately licensed financial institutions after regulatory approval.',
  },
  {
    q: 'Does the virtual simulator use real money?',
    a: 'No. All balances, transactions and performance figures in the simulator are simulated. No real money is invested or transferred.',
  },
  {
    q: 'Do you guarantee investment profits?',
    a: 'No. Invest Smart does not promise that users will become rich or earn guaranteed profits. Investing involves risk, and educational content cannot eliminate that risk.',
  },
  {
    q: 'Which currencies are supported?',
    a: 'Course prices can be displayed in UGX (Ugandan Shilling) and USD (United States Dollar). Currency conversion behaviour will be clearly labelled when live rates are introduced.',
  },
  {
    q: 'Who developed Invest Smart?',
    a: 'Invest Smart is a digital product developed by Rayar Web Studio. You can learn more on the About Rayar Web Studio page.',
  },
];

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 860 }}>
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          description="Important information about what Invest Smart is — and what it is not."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                style={{
                  backgroundColor: 'var(--is-navy-800)',
                  border: '1px solid var(--is-navy-700)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-4) var(--space-6)',
                    backgroundColor: 'transparent',
                    color: 'var(--is-white)',
                    textAlign: 'left',
                    fontSize: 'var(--fs-base)',
                    fontWeight: 600,
                  }}
                >
                  {faq.q}
                  <ChevronDown
                    size={20}
                    style={{
                      flexShrink: 0,
                      transition: 'transform 0.2s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: 'var(--is-emerald-400)',
                    }}
                  />
                </button>
                {isOpen && (
                  <div style={{ padding: '0 var(--space-6) var(--space-4)' }}>
                    <p className="text-grey" style={{ fontSize: 'var(--fs-sm)', lineHeight: 1.8 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
