import { PageTransition } from "@/components/page-transition"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedText } from "@/components/animated-text"
import { ContentCard } from "@/components/content-card"
import { ExternalLink } from "@/components/external-link"
import { MediaLoader } from "@/components/media-loader"
import { ScrollProgress } from "@/components/scroll-progress"
import Link from "next/link"
import Image from "next/image"

const LINKS = {
  LINKEDIN: "https://www.linkedin.com/in/liyiliang/",
  FOSTER: "https://foster.uw.edu/",
}

export default function Future() {
  return (
    <PageTransition>
      <ScrollProgress />
      <div className="container">
        <ThemeToggle />
        <header>
          <div className="gradient-bg" />
          <div className="header-content">
            <AnimatedText text="Liyi in 2025" />
            <h2>The Journey Continues</h2>
            <p className="subtitle">Looking ahead to new horizons</p>
          </div>
        </header>

        <div className="graduation-container">
          <MediaLoader>
            <Image
              src="/image.jpg"
              alt="Graduation at UW Foster School of Business"
              width={850}
              height={480}
              className="graduation-img"
              priority
            />
          </MediaLoader>
        </div>

        <ContentCard className="hover-card">
          <h3 className="section-title">Looking Forward</h3>
          <p>
            It's February 2025, and graduation from the{" "}
            <ExternalLink href={LINKS.FOSTER}>Foster School of Business</ExternalLink> is just around the corner. These
            months at UW have been transformative, filled with challenges, growth, and meaningful connections.
          </p>
          <p>
            As I prepare to close this chapter, I'm both excited and contemplative about what lies ahead. The job search
            is in full swing, and I'm eager to find a role where I can apply my expanded knowledge of information
            systems and data analytics.
          </p>
          <p>These final months are dedicated to:</p>
          <p>
            — Putting the finishing touches on capstone projects
            <br />— Having meaningful conversations with potential employers
            <br />— Strengthening my professional network
            <br />— Envisioning how I want to shape the next phase of my career journey
          </p>
        </ContentCard>

        <div className="btn-container">
          <ExternalLink
            href={LINKS.LINKEDIN}
            className="btn group inline-flex items-center gap-2 hover:gap-3 transition-all no-underline text-white hover:text-white"
          >
            Connect on LinkedIn
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </ExternalLink>
          <Link href="/" className="btn secondary group inline-flex items-center gap-2 hover:gap-3 transition-all">
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to 2024
          </Link>
        </div>

        <footer className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
          &copy; 2024-2025 | Designed with <span className="animate-pulse inline-block">❤️</span>
        </footer>
      </div>
    </PageTransition>
  )
}

