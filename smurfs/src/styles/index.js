import styled, { createGlobalStyle } from 'styled-components';
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
	padding:  2%;
`;

export const H1 = styled.h1`
	font-size: 4rem;
	color: #F9FBFF;
	font-family: 'Pacifico', cursive;
	margin-bottom: 1%;
`;

export const Main = styled.main`
	border-radius: 50%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-around;
	align-items: center;
	width: 600px;
	padding: 2.5% 2.5% 9%;
	border: 5px solid #F9FBFF;
	background: #F9FBFF;
`;

export const Section = styled.section`
 display: flex;
 flex-flow: row wrap;
 justify-content: space-around;
 align-items: space-between;
 width: 90%;
 padding: 0;
 position: relative;
 margin: 0;
`

export const Form = styled.form`
display: flex;
background: #7BE6F7;
flex-flow: column nowrap;
justify-content: space-around;
align-items: center;
border: 2px solid #373F51;
border-radius: 50%;
padding: 2.5% 0;
width: 400px;
height: 200px;
margin: 0 0 2.5%;
font-family: 'Oswald', sans-serif;
`

export const Input = styled.input`
width: 50%;
border: 1px solid black;
text-align: center;
margin: .5%;
border-radius: 5px;
:focus {
	 outline: none;
 }
`

export const Button = styled.button`
 width:${props => props.mode === 'form' ? '75px' : '30%'};
 background: #F9FBFF;
 padding: 2.5%;
 margin-top: 2.5%;
 border: 2px solid #373F51;
 border-radius: 50%;
 color: #373F51;
 font-family: 'Oswald', sans-serif;
 text-align: center;
 :hover {
	 color: #F9FBFF;
	 background: #373F51;
	 cursor: pointer;
	 border: 2px solid #F9FBFF;
 }
 :focus {
	 outline: none;
 }
`
export const Div = styled.div`
border: ${props => props.column ? "2px solid #373F51;" : 'none'};
display: flex;
flex-flow: ${props => props.column ? "column nowrap" : 'row nowrap'};
justify-content: space-around;
align-items: center;
background: #7BE6F7;
padding: 5%;
margin: 1% 0;
width: 100px;
height: 100px;
border-radius: 50%;
`
export const H2 = styled.h2`

	font-size: 1.8rem;
	font-family: 'Oswald', sans-serif;
	font-weight: bold;
	padding: 3%;
	width: 100%;
	text-align: center;
	color: #373F51;
`;

export const H3 = styled.h3`
	display: ${props => props.mode === 'Add' ? 'none': null};
	color: #373F51;
	margin: 1% 0;
	font-size: 1.4rem;
	font-family: 'Oswald', sans-serif;
	:hover {
	cursor:	${props => props.form === 'form'  ? 'pointer': null};
	}
`