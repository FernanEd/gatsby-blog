import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const SecondPage = () => {
  return (
    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">&larr; Go back</Link>
    </Layout>
  )
}

export default SecondPage
