import { createGlobalStyle } from 'styled-components';
import { Layout, Theme } from './theme';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  border: 0;
  letter-spacing: -0.015em;
  color: ${Theme.fontColor};
}
*, 
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
} 

html,
body {
  background: #F5F5F5;
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 20px;
  line-height: 150%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
}
body::-webkit-scrollbar {
  width: ${Layout.scrollbarWidth};
}
@media (max-width: 1120px) {
  body::-webkit-scrollbar {
    width: ${Layout.scrollbarWidth1120};
  }
}
@media (max-width: 768px) {
  body::-webkit-scrollbar {
    width: ${Layout.scrollbarWidth768};
  }
}
body::-webkit-scrollbar-track {
  background: rgb(241, 241, 241);
}
body::-webkit-scrollbar-thumb {
  background-color: rgb(205, 205, 205);
  border: 3px solid rgb(205, 205, 205);
}

body::-webkit-scrollbar-thumb:hover{
  background-color: rgb(193, 193, 193);
  border: 3px solid rgb(193, 193, 193);
}
@media (max-width: 1120px) {
  body {
    font-size: 18px;
  }
}
@media (max-width: 480px) {
  body {
    font-size: 16px;
  }
}
input,
button,
textarea {
  font-family: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
  background-color: rgba($color: #000000, $alpha: 0.0);
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}

img::selection{
   background: space; 
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}
`