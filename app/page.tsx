import { PageTransition } from "@/components/page-transition"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedText } from "@/components/animated-text"
import { VideoPlayer } from "@/components/video-player"
import { ContentCard } from "@/components/content-card"
import { ScrollDown } from "@/components/scroll-down"
import { ExternalLink } from "@/components/external-link"
import { MediaLoader } from "@/components/media-loader"
import { ScrollProgress } from "@/components/scroll-progress"
import Link from "next/link"
import Image from "next/image"

const LINKS = {
  MSIS: "https://foster.uw.edu/academics/degree-programs/master-of-science-in-information-systems/",
  FOSTER: "https://foster.uw.edu/",
  UW: "https://www.washington.edu/",
  LINKEDIN: "https://www.linkedin.com/in/liyiliang/",
}

export default function Home() {
  return (
    <PageTransition>
      <ScrollProgress />
      <div className="container">
        <ThemeToggle />
        <header>
          <div className="gradient-bg" />
          <div className="header-content">
            <div className="avatar-container">
              <div className="avatar-glow" />
              <MediaLoader>
                <Image src="/portrait.png" alt="Liyi's Portrait" width={180} height={180} className="avatar" priority />
              </MediaLoader>
            </div>
            <AnimatedText text="Liyi Liang" />
            <h2>Master of Science in Information Systems</h2>
            <p className="subtitle">Data Analyst and Business Intelligence Specialist</p>
          </div>
        </header>

        <VideoPlayer />

        <ContentCard className="hover-card">
          <h3 className="section-title">My Journey Begins - 2024</h3>
          <p>
            In June 2024, I embarked on a new chapter at the{" "}
            <ExternalLink href={LINKS.MSIS}>University of Washington MSIS program</ExternalLink> at the{" "}
            <ExternalLink href={LINKS.FOSTER}>Michael G. Foster School of Business</ExternalLink>. Just like the little
            girl in the video, I arrived on campus filled with curiosity and anticipation for everything that awaits me
            here at the <ExternalLink href={LINKS.UW}>University of Washington</ExternalLink>.
          </p>
          <p>
            Each day at UW opens new doors of discovery in the world of information systems. Like that little girl, I'm
            wide-eyed with wonder at all the possibilities, eager to explore every corner of this new academic world.
            I'm constantly challenging myself to grow beyond my comfort zone and embrace new perspectives.
          </p>
          <p>As I navigate this journey, I'm particularly excited about:</p>
          <ul>
            <li>Expanding my data analysis toolkit and deepening my understanding of information systems</li>
            <li>Building meaningful connections with industry experts and fellow students</li>
            <li>Applying my technical knowledge to solve real-world challenges</li>
            <li>Creating a foundation for the next evolution of my career</li>
          </ul>
          <p>
            With my background in data analytics and business intelligence, I'm eager to see how this program will
            transform both my skillset and my vision for the future.
          </p>
        </ContentCard>

        <Link href="/future" className="btn group inline-flex items-center gap-2 hover:gap-3 transition-all">
          Fast Forward to 2025
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>

        <footer className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
          &copy; 2024-2025 | Designed with <span className="animate-pulse inline-block">❤️</span> |{" "}
          <ExternalLink href={LINKS.LINKEDIN} className="hover:text-uw-gold">
            Connect on LinkedIn
          </ExternalLink>
        </footer>

        <ScrollDown />
      </div>
    </PageTransition>
  )
}

