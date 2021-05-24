import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import usePosts from "../hooks/usePosts"
import PostPreview from "../components/post-preview"
import Hero from "../components/hero"

const IndexPage = () => {
  const posts = usePosts()

  return (
    <>
      <Hero />
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <Link to="/about">About &rarr;</Link>

        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </Layout>
    </>
  )
}

export default IndexPage
