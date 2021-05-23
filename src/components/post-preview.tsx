import { css } from "@emotion/react"
import { Link } from "gatsby"
import React from "react"
import { IPost } from "../utils/interfaces"
import ReadLink from "./read-link"

const PostPreview: React.FunctionComponent<IPost> = ({
  title,
  author,
  excerpt,
  slug,
}) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <h3>
        {slug} {title}
      </h3>
      <p>{excerpt}</p>
      <ReadLink to={slug}>Read this post &rarr;</ReadLink>
    </article>
  )
}

export default PostPreview
