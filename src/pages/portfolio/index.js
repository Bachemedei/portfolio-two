import React from "react"
import { css } from "@emotion/core"

function portfolio() {
  return (
    <div>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        Portfolio
      </h1>
    </div>
  )
}

export default portfolio
