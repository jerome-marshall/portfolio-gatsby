import React from "react"
import Layout from "../components/Layout/Layout"
import styled from "styled-components"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 24px;

  & .notFound {
    color: var(--white);
    font-size: 140px;
    font-weight: bold;
  }

  & .desc {
    color: var(--white);
    font-size: 30px;
  }
`

const PageNotFound = () => {
  return (
    <Layout>
      <StyledDiv>
        <p className="notFound">404</p>
        <p className="desc">
          Oops... The page you are trying to reach is not available.
        </p>
      </StyledDiv>
    </Layout>
  )
}

export default PageNotFound
