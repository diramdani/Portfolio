type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <p className="mb-3 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-muted-foreground text-pretty">{description}</p>
      ) : null}
    </div>
  )
}
