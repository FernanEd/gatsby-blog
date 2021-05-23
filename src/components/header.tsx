import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link } from "gatsby"

interface NavLinkProps {
  fontWeight?: "bold" | "normal" | "light"
}

const NavLink = styled(Link)<NavLinkProps>`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 4px solid coral;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Header: React.FunctionComponent = ({ children }) => {
  return (
    <header
      css={css`
        background: #eee;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 800px - 0.5rem) / 2);
      `}
    >
      <NavLink to="/" fontWeight="bold">
        FEED BLOG
      </NavLink>

      <nav
        css={css`
          margin-top: 0;
        `}
      >
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/about/" activeClassName="current-page">
          About
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
