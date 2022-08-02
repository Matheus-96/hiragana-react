import { ReactNode, useEffect } from "react"
import { Link } from "react-router-dom"
import { HeaderContainer, MenuStates, toggleMenu, UserActions, LinkItem } from "./styles"
import {ReactComponent as User} from 'assets/images/user.svg'
import { useState } from "react"



export const Header = ({children}: {children: ReactNode})=> {
	
	const [menuState, setMenuState] = useState<MenuStates>('hidden')
	const handleClickOutside = (event:Event) => {
		if(menuState === 'open' || menuState === 'closing'){
			let element = event.target as HTMLElement
			if(!element.classList.contains('dropdown'))
				toggleMenu(menuState,setMenuState)
		}
		
	}
	useEffect(()=> {
		window.addEventListener('click',handleClickOutside)

		return ()=> {
			window.removeEventListener('click',handleClickOutside)
		}
	})


	return (
		<HeaderContainer>
			{children}
			<UserActions
				menuState={menuState}
				onClick={()=> toggleMenu(menuState,setMenuState)}
				className="dropdown"
			>
				<User className="userIcon" />
				<h4 className="username">Victor</h4>
				<div className="menu">
						<LinkItem to={'/'}>Logout</LinkItem>
				</div>



			</UserActions>
		</HeaderContainer>
	)
}