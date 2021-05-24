import { FluidObject } from "gatsby-image"

export interface IPost {
  title: string
  author: string
  slug: string
  image: {
    sharp: {
      fluid: FluidObject
    }
  }
  excerpt: string
}
