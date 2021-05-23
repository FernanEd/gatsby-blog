import { graphql, useStaticQuery } from "gatsby"
import { IPost } from "../utils/interfaces"

const usePosts = (): IPost[] => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map((post: any) => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
  }))
}

export default usePosts
