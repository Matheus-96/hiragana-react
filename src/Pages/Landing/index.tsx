import { Button } from "../../Components/Buttons";
import { Paragraph } from "../../Components/Paragraph";
import { Subtitle } from "../../Components/Subtitle";
import { Title } from "../../Components/Title";
import * as S from './Styles'
import {ReactComponent as GithubIcon} from '../../assets/images/github.svg'
import * as M from '../../Components/Modal'
import { useState } from "react";
import { ModalStates } from "../../Components/Modal/interfaces";
import { Header } from "../../Components/Header";


export default function Landing(){
	
	const [modalState, setModalState] = useState<ModalStates>('hidden')
	
	function toggleModal(){ M.toggleModal(modalState, setModalState) }

	function changeText(e: React.MouseEvent<HTMLElement>, text: string){
		e.stopPropagation()
		let target = e.currentTarget as HTMLElement
		console.log(target.tagName);
		if(target.tagName !== 'SPAN'){
			let lastChild = target.lastElementChild as HTMLElement
			
			if(lastChild.tagName === 'SPAN'){
				//Trocar o texto após 125ms, para entrar na transição
				setTimeout(() => {
					lastChild.textContent = text
				}, 125);

				//Ativar a classe que aplica a animação
				lastChild.classList.toggle('text-animated--change')
				
				//Remover a classe de animação apos o fim da animação
				setTimeout(() => {
					lastChild.classList.toggle('text-animated--change')
				}, 250);
			} else {
				console.warn('Elemento SPAN não encontrado dentro de ' + target.nodeName)
				
			}
		}
	}

	return(
		<S.Container>
			<M.Backdrop
				state={modalState}
				onClick={(e)=> { if(M.ClickedBackdrop(e.target as HTMLElement)) toggleModal() }}
				className='backdrop'
			>
				<M.Modal state={modalState}>
					<M.Header>
						<M.Title
							onMouseOut={e=> changeText(e,'ようこそ！')}
							onMouseOver={e=> changeText(e,'Welcome!')}
						>
							<span>ようこそ！</span>
						</M.Title>
						<M.Close  
							onClick={()=>toggleModal()}
							/>
					</M.Header>
					<M.Body>
						<M.Subtitle>Register new user</M.Subtitle>
					</M.Body>
				</M.Modal>
			</M.Backdrop>

			<Header>
				<Title>
					Hiragana<br />
					Learning Tool
				</Title>
			</Header>
			<S.Main>
				<S.Article>
					<Subtitle>
						Did you know that
					</Subtitle>
					<Paragraph>
						Reading consistently strengthens connections in the brain, improves
						memory and concentration, and may even help you live longer. Reading
						can also reduce stress levels and prevent age-related cognitive decline.
					</Paragraph>
				</S.Article>

				<S.ButtonContainer>
					<Button
						btnType="primary"
						size='md'
						className="text-animated"
						onClick={()=> toggleModal()}
						onMouseOver={e=> changeText(e,'とうろくする')}
						onMouseOut={e=> changeText(e,'Register')}
					>
						<span>Register</span>
					</Button>
					<Button
						btnType="outline"
						size='sm'
						onMouseOver={e=> changeText(e,'ログイン')}
						onMouseOut={e=> changeText(e,'Login')}
					>
						<span>Login</span>
					</Button>
				</S.ButtonContainer>
			</S.Main>
			<S.Footer>
				<GithubIcon className="icon"/>
				<S.Link href="https://github.com/matheus-96" target='_blank' rel='noreferrer noopener nofollow'>Matheus-96</S.Link>
			</S.Footer>
		</S.Container>
	)
}