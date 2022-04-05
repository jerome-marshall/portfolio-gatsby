import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import AboutSection from "../components/About/About"
import Experience from "../components/Experience/Experience"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"


export default function Home(props) {

  const data = props.data.glstrapi.globalDatum
  const name = data.name
  const allPageData = data.pageContent

  const pages = allPageData.map(pageData => {
    switch (pageData.__typename) {
      case "GLSTRAPI_ComponentPageContentHeroPageContent":
        return <Hero data={{ name, ...pageData }} key={pageData.__typename} />

      case 'GLSTRAPI_ComponentPageContentAboutPageContent':
        return <AboutSection data={pageData} key={pageData.__typename}/>

      case 'GLSTRAPI_ComponentPageContentExperiencePageContent':
        return <Experience data={pageData} key={pageData.strapi_component}/>

      case 'GLSTRAPI_ComponentPageContentProjectsPageContent':
        return <Projects data={pageData} key={pageData.strapi_component}/>

      case 'GLSTRAPI_ComponentPageContentContactPageCotent':
        return <Contact data={pageData} key={pageData.strapi_component}/>

      default:
        return null
    }
  })

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jerome Marshall</title>
      </Helmet>
      <Layout>
        <div className="scroll-container">{pages}</div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query GetGlobalData {
    glstrapi {
      globalDatum {
        name
        myImage {
          url
        }
        pageContent {
          ... on GLSTRAPI_ComponentPageContentAboutPageContent {
            __typename
            description
            pageTitle
            skillset {
              name
              url
            }
          }
          ... on GLSTRAPI_ComponentPageContentHeroPageContent {
            __typename
            description
            pageTitle
            shortDescription
          }
          ... on GLSTRAPI_ComponentPageContentExperiencePageContent {
            __typename
            pageTitle
            jobs(sort: "doj:DESC") {
              companyName
              created_at
              designation
              doj
              range
              url
              workDescription
            }
          }
          ... on GLSTRAPI_ComponentPageContentProjectsPageContent {
            __typename
            pageTitle
            projects(sort: "date:DESC") {
              date
              description
              externalURL
              githubURL
              name
              personal
              projectFor
              projectImg {
                url
              }
              techStack {
                name
                url
              }
            }
          }
          ... on GLSTRAPI_ComponentPageContentContactPageCotent {
            __typename
            description
            pageTitle
            pageTitleIntro
          }
        }
        socials {
          displayName
          name
          url
        }
      }
    }
  }
`
