import * as React from "react"
import { Global, css } from "@emotion/react"
import Header from "./header"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

const Layout: React.FunctionComponent = ({ children }) => {
  const meta = useSiteMetadata()

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: "Arial";
            font-size: 18px;
            line-height: 1.4;

            > div {
              margin: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          }
        `}
      />

      <Helmet>
        <html lang="es" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <Header />
      <main
        css={css`
          padding: 0.5rem calc((100vw - 800px) / 2);
        `}
      >
        {children}
      </main>
    </>
  )
}

export default Layout
