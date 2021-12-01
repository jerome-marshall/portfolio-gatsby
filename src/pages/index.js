import React from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import AboutSection from "../components/About/About"
import Experience from "../components/Experience/Experience"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <Hero />
        <AboutSection />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Layout>
  )
}
