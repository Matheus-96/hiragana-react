import styled from "styled-components"

export const CustomInput = styled.input`
	font-weight: bold;
	padding: 1rem .75rem;
	outline: none;
	border: none;
	border-radius: 10px;
	background-color: ${props=> props.theme['input-background']};
	color:  ${props=> props.theme['raisin-black']};
	&:focus{
		background-color: #fff7b3;
		outline: 1px solid ${props=> props.theme['raisin-black']};
		
	}
	&.error {
		outline: 1px solid red;
	}
`

export function Validate(regex: RegExp, value: string){
	
	return regex.test(value)
}
