import styled from "styled-components";

export const Title = styled.h1`
	font-family: 'Montserrat';
	font-weight: bolder;
	font-size: 3rem;
	line-height: 3.5rem;
	color: ${props => props.theme['text-primary']};
	text-shadow: 2px 2px rgba(0,0,0,.125),-2px -2px rgba(0,0,0,.125),-2px 2px rgba(0,0,0,.125),2px -2px rgba(0,0,0,.125);
	@media screen and (max-width: 768px){
		text-align: center;
	}
`