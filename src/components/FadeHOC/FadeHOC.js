import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const FadeHOC = props => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  useEffect(() => {
    if (Aos) {
      Aos.refresh()
    }
  })

  return <div data-aos="fade-up">{props.children}</div>
}

export default FadeHOC
