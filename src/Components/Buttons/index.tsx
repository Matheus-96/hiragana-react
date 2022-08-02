import styled from "styled-components";

export const Button = styled.button<Props>`
			padding: .75rem 1.25rem;
			margin: .75rem 0;
			font-size: 1.1rem;
			font-weight: bold;
			border-radius: 10px;
			line-height:1.25rem;
			outline: none;
			border: none;
			filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.15));
			
			${props=> {
				if(props.btnType === 'primary')
					return `
						border: 3px solid transparent;
						background-color: ${props.theme['color-emphasis']};
						color:white;
						transition:background-color 250ms;
						&:hover {
							background-color: ${props.theme['color-emphasis--hover']};
						}
						&:active {
							background-color: ${props.theme['color-emphasis--active']};
						}
						`
				if(props.btnType === 'outline')
					return `
						border: 3px solid ${props.theme['color-emphasis']};
						color: ${props.theme['color-emphasis']};
						transition:background-color 250ms;
						&:hover {
							background-color: ${props.theme['color-emphasis--hover']};
							border-color:transparent;
							color:white;
						}
						&:active {
							background-color: ${props.theme['color-emphasis--active']};
						}
						`
			}}
			${props=> {
				if(props.size === 'sm')
					return `
						width: 15%;
						@media screen and (max-width:768px){
							width:80%;
						}
					`

				if(props.size === 'md')
					return `
						width: 30%;
						@media screen and (max-width:768px){
							width:80%;
						}
					`

				if(props.size === 'lg')
					return `
						width: 60%;
						@media screen and (max-width:768px){
							width:80%;
						}
					`
				
					if(props.size === 'full')
					return `
						width: 100%;
						@media screen and (min-width:768px){
							width:80%;
						}
					`
			}}

`
interface Props {
	btnType?: 'primary' | 'outline',
	size?: 'sm' | 'md' | 'lg' | `full`
}