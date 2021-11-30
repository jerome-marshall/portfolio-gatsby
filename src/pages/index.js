import React from "react"
import Layout from "../components/Layout/Layout"
import "./index.css"
import GlobalStyles from "../GlobalStyles"
import Hero from "../components/Hero/Hero"
import AboutSection from "../components/About/About"
import Experience from "../components/Experience/Experience"
import Work from "../components/Work/Work"
import Contact from "../components/Contact/Contact"

export default function Home() {
  return (
    <Layout>
      <GlobalStyles />
      <div className="home">
        <Hero />
        <AboutSection />
        <Experience />
        <Work />
        <Contact />
      </div>
    </Layout>
  )
}
