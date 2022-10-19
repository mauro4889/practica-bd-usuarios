import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    
html{
    scroll-behavior: smooth;
}
    body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: 'Montserrat', sans-serif;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }
    a {
    text-decoration: none;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }
`;