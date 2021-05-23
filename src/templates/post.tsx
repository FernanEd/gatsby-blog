import React from "react"
import { css } from "@emotion/react"
import ReadLink from "../components/read-link"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }

      body
    }
  }
`

const Post: React.FunctionComponent<{ data: { mdx: { body: string } } }> = ({
  data: { mdx: post },
}) => {
  return (
    <Layout>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/">&larr; Go back to home</ReadLink>
    </Layout>
  )
}

export default Post
