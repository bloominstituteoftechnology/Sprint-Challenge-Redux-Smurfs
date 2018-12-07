import styled, { createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

html{
    font-size: 62.5%
}
body {
	box-sizing: border-box;
    margin: 0;
	padding: 0;
	background: #7BE6F7;
	@import url('https://fonts.googleapis.com/css?family=Oswald:200,400|Pacifico');
}
`;
export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding:  2.5%;
`;

export const H1 = styled.h1`
	font-size: 4rem;
	color: #F9FBFF;
	font-family: 'Pacifico', cursive;
	margin-bottom: 2.5%;
`;

export const Main = styled.main`
	border-radius: 30%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-around;
	align-items: center;
	width: 700px;
	padding: 1%;
	background: #F9FBFF;
`;

export const Section = styled.section`
 display: flex;
 flex-flow: row wrap;
 justify-content: space-around;
 align-items: center;
 width: 90%;
 padding: 2.5% 0;
 position: relative;
 margin: 0% 0 1%;
`
export const Break = styled.div`
border: 1px solid black;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0;
width: 50%;
margin: 200px;
position: absolute;
`

export const Form = styled.form`
shape-outside: circle(50%);
shape-margin: 20%;
top: 10;
display: flex;
background: #373F51;
flex-flow: column nowrap;
justify-content: space-around;
align-items: center;
border: 2px solid #7BE6F7;
border-radius: 25px;
padding: 2.5% 0;
width: 35%;
margin: 0%;
font-family: 'Oswald', sans-serif;
`

export const Input = styled.input`
width: 50%;
border: 1px solid black;
text-align: center;
margin: 2.5%;
border-radius: 5px;
`

export const Button = styled.button`
 width: 30%;
 background: #7BE6F7;
 padding: 5%;
 margin-top: 5%;
 border: 2px solid #F9FBFF;
 border-radius: 50%;
 font-family: 'Oswald', sans-serif;
 :hover {
	 background: #373F51;
	 color: #7BE6F7;
	 cursor: pointer;
 }
 :focus {
	 outline: none;
 }
`
export const Div = styled.div`
border: ${props => props.column ? "2px solid #7BE6F7" : 'none'};
display: flex;
flex-flow: ${props => props.column ? "column nowrap" : 'row nowrap'};
justify-content: space-around;
align-items: center;
position: relative ;
background: #373F51;
padding: 5%;
margin: 2.5% 0;
width: 100px;
border-radius: 50%;
`
export const H2 = styled.h2`

	font-size: 1.8rem;
	font-family: 'Oswald', sans-serif;
	font-weight: bold;
	padding: 2.5%;
	width: 100%;
	text-align: center;
	color: #F9FBFF;
`;

export const H3 = styled.h3`
	display: ${props => props.mode === 'Add' ? 'none': null};
	color: #F9FBFF;
	margin: 2.5% 0;
	font-size: 1.4rem;
	font-family: 'Oswald', sans-serif;
	:hover {
	cursor:	${props => props.form  ? 'pointer': null};
	}
`