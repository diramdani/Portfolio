import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Experience } from '@/components/sections/experience'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'

export function HomePage() {
  return (
    <div className="min-h-svh">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-background focus:px-3 focus:py-2"
      >
        Loncat ke konten
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
