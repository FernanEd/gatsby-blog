import styled from "@emotion/styled"
import * as React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const ImgBackground = styled(BackgroundImage)`
  background-image: url("/images/playa.jpg");
  background-position: bottom center;
  background-size: cover;

  height: 50vh;

  + * {
    margin-top: 0;
  }
`

const TextBox = styled("div")`
  background: linear-gradient(#3388cc99, #3388cc00);
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  width: 100%;
  padding: 0 calc((100vw - 800px) / 2) 2rem;

  h1 {
    color: white;
    text-shadow: 1px 1px 3px #00000099;
    font-size: 2.3rem;
  }

  p {
    margin-top: 0;
    color: white;
    text-shadow: 1px 1px 3px #00000099;
  }
`

const Hero: React.FunctionComponent = () => {
  const { image } = useStaticQuery(graphql`
    {
      image: imageSharp(id: { eq: "45102633-b506-588d-921f-78135f0e7c93" }) {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

  return (
    <ImgBackground Tag="section" fluid={image.fluid}>
      <TextBox>
        <h1>Playa de tampico</h1>
        <p>Tan chidas &hearts;</p>
      </TextBox>
    </ImgBackground>
  )
}

export default Hero
