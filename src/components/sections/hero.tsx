import { ArrowDown, Download, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/portfolio'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.7_0.08_200_/_0.16),transparent_55%)]"
      />
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
        <Badge variant="outline" className="mb-6 w-fit gap-1.5 px-3 py-1">
          <Sparkles className="size-3.5" />
          Tersedia untuk proyek baru
        </Badge>
        <p className="mb-3 text-sm font-medium tracking-wide text-muted-foreground uppercase">
          {profile.role} · {profile.location}
        </p>
        <h1 className="font-heading max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
          {profile.subheadline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button size="lg" asChild>
            <a href="#contact">
              Hire Me
              <ArrowDown data-icon="inline-end" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <a href={profile.cvUrl} download>
              <Download data-icon="inline-start" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
