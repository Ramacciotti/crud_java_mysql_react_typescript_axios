import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
  --white: #f4f3f7;
  --secondary: #62c4c4;
  --primary: #216464;
}
 
body {  
  font-family: sans-serif;
  background-color: var(--primary);
  padding: 0;
  margin: 0 0 20px 0 ;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
