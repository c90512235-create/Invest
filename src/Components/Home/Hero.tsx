import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { Button } from '../ui/Button';

const chartData = [
  { month: 'Jan', value: 100 },
  { month: 'Mar', value: 112 },
  { month: 'May', value: 108 },
  { month: 'Jul', value: 125 },
  { month: 'Sep', value: 140 },
  { month: 'Nov', value: 158 },
];

export function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        paddingBlock: 'var(--space-24)',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60%',
          height: '120%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container" style={{ position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'var(--space-16)',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.9rem',
                borderRadius: '999px',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                marginBottom: 'var(--space-6)',
              }}
            >
              <ShieldCheck size={16} style={{ color: 'var(--is-emerald-400)' }} />
              <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--is-emerald-400)', fontWeight: 600 }}>
                Education-first • No guaranteed returns
              </span>
            </div>

            <h1 style={{ marginBottom: 'var(--space-6)' }}>
              Learn Smart.{' '}
              <span style={{ color: 'var(--is-emerald-400)' }}>Build Your Financial Future.</span>
            </h1>

            <p
              className="text-grey"
              style={{
                fontSize: 'var(--fs-lg)',
                maxWidth: 560,
                marginBottom: 'var(--space-8)',
                lineHeight: 1.7,
              }}
            >
              Explore financial education, understand investment opportunities and practise
              financial decision-making through a virtual investment experience.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
              <Button variant="primary" size="lg" to="/register">
                Get Started <ArrowRight size={18} />
              </Button>
              <Button variant="secondary" size="lg" to="/courses">
                Explore Courses
              </Button>
              <Button variant="ghost" size="lg" to="/simulator">
                <PlayCircle size={18} /> Virtual Simulator
              </Button>
            </div>

            <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--is-grey-500)', maxWidth: 500 }}>
              Invest Smart provides financial education and simulated practice only. It does not provide
              financial advice, does not manage money and does not guarantee investment returns.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--is-navy-800)',
              border: '1px solid var(--is-navy-700)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-6)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
              <div>
                <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--is-grey-400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Simulated Portfolio Growth
                </p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-2xl)', fontWeight: 700 }}>
                  +58.0%
                </p>
              </div>
              <span
                style={{
                  fontSize: 'var(--fs-xs)',
                  color: 'var(--is-navy-950)',
                  backgroundColor: 'var(--is-emerald-400)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '999px',
                  fontWeight: 700,
                }}
              >
                SIMULATED
              </span>
            </div>

            <div style={{ width: '100%', height: 200 }}>
              <ResponsiveContainer>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#64748B" fontSize={11} axisLine={false} tickLine={false} />
                  <YAxis hide domain={[80, 180]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0A1628',
                      border: '1px solid #172C4A',
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                    labelStyle={{ color: '#CBD5E1' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2.5} fill="url(#heroGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--is-grey-500)', marginTop: 'var(--space-3)' }}>
              Illustrative example only. Past performance and simulated results do not guarantee future outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
          }
