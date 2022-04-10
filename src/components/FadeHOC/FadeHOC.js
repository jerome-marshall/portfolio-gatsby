import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const FadeHOC = ({ children, animation }) => {
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

  return (
    <div data-aos={animation} data-aos-once="true">
      {children}
    </div>
  )
}

export default FadeHOC
