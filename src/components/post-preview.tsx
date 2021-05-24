import { css } from "@emotion/react"
import { Link } from "gatsby"
import React from "react"
import { IPost } from "../utils/interfaces"
import ReadLink from "./read-link"
import Image from "gatsby-image"

const PostPreview: React.FunctionComponent<IPost> = ({
  title,
  author,
  excerpt,
  image,
  slug,
}) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;

        display: flex;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link to={slug} css={css`
        margin: 1rem 1rem 0 0;
        width: 150px;
      `}>
        <Image fluid={image.sharp.fluid} alt={title} css={css`
          
        `}/>
      </Link>
      <div>
        <h3>
          {slug} {title}
        </h3>
        <p>{excerpt}</p>
        <ReadLink to={slug}>Read this post &rarr;</ReadLink>
      </div>
    </article>
  )
}

export default PostPreview
