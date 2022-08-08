import styled from "styled-components"


export const InputGroup = styled.div`
	padding: 1rem;
`

export const CustomLabel = styled.label`
padding: 0 .5rem;
font-size: 1.25rem;
line-height: 2rem;
display: block;
`

export const CustomInput = styled.input`
	font-weight: bold;
	width: 100%;
	padding: 1rem .75rem;
	outline: none;
	border: none;
	border-radius: 10px;
	background-color: ${props=> props.theme['input-background']};
	color:  ${props=> props.theme['raisin-black']};

	transition: width .25s;

	&:focus{
		background-color: #fff7b3;
		outline: 1px solid ${props=> props.theme['raisin-black']};
		
	}
	&.error {
		outline: 1px solid red;
		@media screen and (min-width: 768px){
			width: 60%;
		}
	}
	
`
export const Hint = styled.span`
	padding-left	: 1rem;
	opacity: 0;
	
	&.visible {
		transition: opacity .5s;
		opacity: 1;
	}
`
