import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Link to="/about">About &rarr;</Link>
    </Layout>
  )
}

export default IndexPage
