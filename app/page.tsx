"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            entry.target.classList.remove("opacity-0")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    )

    if (sectionsRef.current[0]) {
      sectionsRef.current[0].classList.remove("opacity-0")
      sectionsRef.current[0].classList.add("animate-fade-in-up")
    }

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 lg:px-16">
        <header id="intro" ref={(el) => (sectionsRef.current[0] = el)} className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-5 gap-16 w-full">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2026</div>
                <h1 className="text-6xl lg:text-7xl font-light tracking-tight">
                  Akhil
                  <br />
                  <span className="text-muted-foreground">P</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Senior UIUX Designer / Frontend	 with over
                  <span className="text-foreground"> 11 years of experience</span> creating scalable, high-performing
                  web applications for the
                  <span className="text-foreground"> financial, healthcare, and automotive</span> industries.
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>Remote / US</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-8">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Senior UIUX Designer / Frontend</div>
                  <div className="text-muted-foreground">@ Benz, GA</div>
                  <div className="text-xs text-muted-foreground">Feb 2024 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["React.js & Next.js", "TypeScript", "Redux & State Management", "API Integration", "Accessibility (WCAG 2.1)", "Three.js & WebXR", "D3.js & Data Viz"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="work" ref={(el) => (sectionsRef.current[1] = el)} className="min-h-screen py-32 opacity-100">
          <div className="space-y-16">
            <div className="flex items-end justify-between">
              <h2 className="text-4xl font-light">Professional Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">2015 — 2025</div>
            </div>

            <div className="space-y-12">
              {[
                {
                  year: "2024",
                  role: "Senior UIUX Designer / Frontend",
                  company: "Benz, GA",
                  description:
                    "Developed and maintained React-based applications for Benz's automotive configurator and digital commerce platforms. Built scalable UI components with React, Tailwind CSS, and Context API for multi-device experiences. Developed 3D trim preview and interactive vehicle customization workflows using Three.js, React Three Fiber, and WebXR. Integrated Python-based AI models for real-time vehicle state predictions.",
                  tech: ["React.js", "TypeScript", "Three.js", "Node.js", "MongoDB", "WebXR", "GraphQL", "Apollo Client"],
                },
                {
                  year: "2021",
                  role: "Senior UIUX Designer / Frontend",
                  company: "GE Health, WA",
                  description:
                    "Developed React applications for GE Health's diagnostic, scheduling, and patient management platforms with HIPAA-compliant architecture. Built reusable, accessible UI components using React, Tailwind CSS, and styled-components. Implemented data visualization dashboards with Recharts, D3.js, and Tableau/Power BI for patient vitals and predictive analytics.",
                  tech: ["React.js", "TypeScript", "Redux Toolkit", "FHIR APIs", "D3.js", "Recharts", "WebSockets"],
                },
                {
                  year: "2019",
                  role: "Senior UIUX Designer / Frontend",
                  company: "State of New York, NY",
                  description:
                    "Developed and maintained React-based public portals for housing, education, and health services with accessibility and localization. Built SPAs using React Router, Context API, and Hooks. Delivered COVID-19 tools including test registration, appointment scheduling, and eligibility flow. Ensured WCAG 2.1 compliance with semantic HTML and ARIA roles.",
                  tech: ["React.js", "TypeScript", "Formik", "Firebase", "WebSockets", "react-intl", "Cypress"],
                },
                {
                  year: "2017",
                  role: "Senior UIUX Designer / Frontend",
                  company: "Walmart, AR",
                  description:
                    "Built enterprise-level front-end modules using React.js and TypeScript for Walmart's internal inventory and logistics platforms. Developed reusable UI components for dashboards, stock tracking, and product workflows with atomic design principles. Designed inventory and logistics dashboards with Power BI, Tableau, and Qlik for real-time operational decisions.",
                  tech: ["React.js", "TypeScript", "Redux Toolkit", "Recharts", "Jest", "Tailwind CSS", "Jenkins"],
                },
                {
                  year: "2015",
                  role: "Senior UIUX Designer",
                  company: "Gainwell Technologies, TX",
                  description:
                    "Developed React-based front-end applications for healthcare portals handling Medicaid claims and provider enrollment workflows. Created modular, reusable components using React and SCSS. Built form structures using Formik and Yup with dynamic field rendering, nested validations, and error handling. Engineered multilingual user interfaces using react-i18next.",
                  tech: ["React.js", "TypeScript", "SCSS", "Formik", "Chart.js", "Jenkins", "AWS S3", "Cypress"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-8 py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="thoughts" ref={(el) => (sectionsRef.current[2] = el)} className="min-h-screen py-32 opacity-100">
          <div className="space-y-16">
            <h2 className="text-4xl font-light">Technical Insights</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Scalable React Architecture",
                  excerpt:
                    "Building modular, reusable, and maintainable components with React.js, Next.js, Redux, and TypeScript. Implementing atomic design principles for enterprise-level applications.",
                  date: "Feb 2024",
                },
                {
                  title: "Accessibility-First Development",
                  excerpt:
                    "Implementing WCAG 2.1 accessibility standards using Lighthouse, axe DevTools, and ARIA roles. Building inclusive UIs with contrast testing, focus rings, and keyboard navigation.",
                  date: "Jun 2023",
                },
                {
                  title: "Immersive 3D Web Experiences",
                  excerpt:
                    "Prototyping AR/VR web interfaces using WebXR, Three.js, and React Three Fiber. Creating interactive vehicle customization workflows and 3D trim preview experiences.",
                  date: "Sep 2024",
                },
                {
                  title: "Real-Time Dashboards & Data Viz",
                  excerpt:
                    "Designing complex analytics dashboards with D3.js, Recharts, and integration with BI tools like Tableau and Power BI. Building real-time updates with WebSockets and socket.io.",
                  date: "Apr 2022",
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="group p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[3] = el)} className="py-32 opacity-100">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Open to new opportunities in React development, enterprise applications, and innovative web
                  technologies.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:akhilrao2992@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-lg">akhilrao2992@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <Link
                    href="tel:+15129009470"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-lg">(512) 900-9470</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 gap-4">
                <Link
                  href="https://www.linkedin.com/in/akhil-p-4167b333b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      LinkedIn
                    </div>
                    <div className="text-sm text-muted-foreground">akhil-p-4167b333b</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Akhil P. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with Next.js and deployed on Vercel</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
