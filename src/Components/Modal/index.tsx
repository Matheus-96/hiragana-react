import { SetStateAction } from "react";
import styled from "styled-components";
import { FlexDirection, IModal, ModalStates } from "./interfaces";

export function toggleVisibility(modalState: ModalStates, setModalState: React.Dispatch<SetStateAction<ModalStates>>){
	switch(modalState){
		case 'hidden':
			setModalState('open')
			break;

		case 'open': 
			setModalState('closing')
			setTimeout(()=> setModalState('hidden'), 500)
			break;
	}
}

export function visibilityOutIn(modalState: ModalStates, setModalState: React.Dispatch<SetStateAction<ModalStates>>){
	console.log(modalState);
	
	switch(modalState){
		case 'open': 
			setModalState('closing')
			setTimeout(()=> {
				setModalState('hidden')
				setTimeout(() => {
					setModalState('open')
				}, 100);
			}, 500)
			break;
	}
}

export function ClickedBackdrop(e: HTMLElement){
	return e.classList.contains('backdrop');
	
}

export const Modal = styled.div<IModal>`
	font-family: 'Montserrat';
	position: absolute;
	width: 60%;
	background-color: white;
	top:50%;
	left: 50%;
	transform: translate(-50%, -40%);
	padding: 1rem;
	border-radius: 10px;
	filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.2));
	z-index: 10;
	transition: transform .5s, opacity .5s;
	@media screen and (max-width: 768px){
		width: 80%;
	}

	${props => {
		if(props.state === 'hidden')
			return `
			visibility: hidden;
			opacity: 0;
			`
		if(props.state === 'open')
			return `
				visibility: visible;
				transform: translate(-50%, -50%);
				opacity: 1;
			`
		if(props.state === 'closing')
			return `
				opacity: 0;
			`
	}}
	
`

export const Backdrop = styled.div<IModal>`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top:50%;
	left: 50%;
	transition: opacity .5s, transform .5s;
	z-index: 9;

	transform: translate(-50%, -50%);
	background-color: rgba(0,0,0,.45);

${props => {
		if(props.state === 'hidden')
			return `
			visibility: hidden;
			opacity: 0;
			`
		if(props.state === 'open')
			return `
				visibility: visible;
				opacity: 1;
			`
		if(props.state === 'closing')
			return `
				opacity: 0;
			`
	}}
`

export const Header = styled.div`
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${props => props.theme['text-primary']};
`

export const Title = styled.h3`
	font-size: 2rem;
	line-height: 2.2rem;
	font-weight: bold;
`

export const Close = styled.div`
	&::before{
		font-size: 24px;
		content: "✖";
		cursor: pointer;
	}
`
export const Body = styled.div`
display: flex;
flex-direction: column;
padding: 1rem 0;
height: 100%;
`

export const Subtitle = styled.h2`
font-weight: bold;
font-size: 1.2rem;
text-align: center;
color: ${props => props.theme['text-primary']};
`

export const Container = styled.div<{direction: FlexDirection, state: ModalStates, center?: boolean}>`
	transition: opacity .5s;

	${props => {
		if(props.state === 'hidden')
			return `
			visibility: hidden;
			opacity: 0;
			`
		if(props.state === 'open')
			return `
				visibility: visible;
				opacity: 1;
			`
		if(props.state === 'closing')
			return `
				opacity: 0;
			`
	}}

	padding: 1rem;
	display: flex;
	flex-grow: 1;
	justify-content: center;
	flex-direction: ${props => props.direction};
	align-items: ${props => props.center ? "center" : "unset"}
`

export const Img = styled.img`
	margin: 0 auto;
	width: 60px;
	height: auto;
`