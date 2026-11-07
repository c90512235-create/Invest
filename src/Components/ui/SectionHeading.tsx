interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '720px' : '100%',
        marginInline: align === 'center' ? 'auto' : undefined,
        marginBottom: 'var(--space-12)',
      }}
    >
      {eyebrow && (
        <p
          style={{
            color: 'var(--is-emerald-400)',
            fontSize: 'var(--fs-sm)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-3)',
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2>{title}</h2>
      {description && (
        <p
          className="text-grey"
          style={{
            marginTop: 'var(--space-4)',
            fontSize: 'var(--fs-lg)',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
