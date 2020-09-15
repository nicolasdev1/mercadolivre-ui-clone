import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--color-primary);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', -apple-system, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  }
  :root {
    --color-primary: #f5f5f5;
    --color-black: #333;
    --color-white: #fff;
    --color-gray: #666;
    --color-blue: #3483fa;
    --color-green: #00a650;

    --color-header: #fff159;
    --color-search-placeholder: #aaa;
    --color-border: #ddd;

    --reputation-1: #ffe7e6;
    --reputation-2: #fff4e7;
    --reputation-3: #fffde5;
    --reputation-4: #f3fee0;
    --reputation-5: #00a650;

    --panel-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
  }
`
