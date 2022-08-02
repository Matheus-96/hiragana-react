import { SetStateAction } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
		font-family: 'Montserrat';
		color: white;
		min-height:240px;
		background: url('assets/images/personStudying.jpg');
		background-size: cover;
		background-position: bottom;
		display: flex;
		align-items: center;
		padding: 0 2rem;
		justify-content: space-between;
		
		/* @media screen and (max-width: 768px){
			padding: 0;
			flex-direction: column;
			justify-content: space-around;
			min-height:180px;

		} */
`

export const UserActions = styled.div<UserAction>`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.125rem 1.5rem;
	background-color: ${props => props.theme['color-emphasis']};
	
	border-radius: ${props => props.menuState === 'open' ? `
		10px 10px 0 0;
	` : `
		100%;
	`};
	transition: border-radius .25s;

	
	
	cursor: pointer;
	.userIcon {
		width: 30px;
		height: 30px;
		filter: invert(100%);

		//Faz ignorar o clique
		pointer-events: none;
	}
	.username {
		margin-top: .25rem;
		font-weight: regular;
		pointer-events: none;

	}

	.menu {
		position: absolute;
		top: 100%;
		right: 0%;
		width: 150%;
		padding: .5rem;
		
		border-radius: 10px 0 10px 10px;
		background-color: ${props => props.theme['background-light']};
		color: ${props=> props.theme['text-primary']};
		transition: opacity .25s, transform .25s;
		${props=> {
				switch(props.menuState){
					case 'open':
						return `
							visibility: visible;
							opacity: 1;
						`
					case 'closing':
						return `
						 opacity: 0;
						 transform: translateY(-20%);
					 `
					 case 'hidden':
						return `
							visibility: hidden;
							transform: translateY(-20%);
							
						`
				}
			}
		}
	}
	.logout {
		margin-top: 0.5rem;
		text-decoration: none;
		:visited {
			color: white;
		}
	}
`

export const LinkItem = styled(Link)`
		color: ${props => props.theme['text-primary']};
		text-decoration: none;
		font-weight: bold;
		display: block;
		padding: .25rem .5rem;
		border-radius: 5px;
		transition: background-color .125s, color .125s;
	:visited{
		color: ${props => props.theme['raisin-black']};
	}
	:hover{
		background-color: ${props => props.theme['color-emphasis--hover']};
		color: ${props => props.theme['background-light']};

	}
	
	`

export function toggleMenu(modalState: MenuStates, setModalState: React.Dispatch<SetStateAction<MenuStates>>){
	switch(modalState){
		case 'hidden':
			setModalState('open')
			break;

		case 'open': 
			setModalState('closing')
			setTimeout(()=> setModalState('hidden'), 250)
			break;
	}
}

interface UserAction{
	menuState: MenuStates
}

export type MenuStates = 'hidden' | 'open' | 'closing'