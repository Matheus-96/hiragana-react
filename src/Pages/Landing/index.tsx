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
	function changeText(e: HTMLButtonElement, text: string){
		e.textContent = text
	}

	return(
		<S.Container>
			<M.ModalBackdrop
				state={modalState}
				onClick={(e)=> { if(M.ClickedBackdrop(e.target as HTMLElement)) toggleModal() }}
				className='backdrop'
			>
				<M.Modal state={modalState}>
					<M.ModalHeader>
						<M.ModalTitle>
							Register new user
						</M.ModalTitle>
						<M.ModalClose  
							onClick={()=>toggleModal()}
							/>
					</M.ModalHeader>
				</M.Modal>
			</M.ModalBackdrop>

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
						onMouseOver={e=> changeText(e.target as HTMLButtonElement,'とうろくする')}
						onMouseOut={e=> changeText(e.target as HTMLButtonElement,'Register')}
						onClick={()=> toggleModal()}
					>
						Register
					</Button>
					<Button
						btnType="outline"
						size='sm'
						onMouseOver={e=> changeText(e.target as HTMLButtonElement,'ログイン')}
						onMouseOut={e=> changeText(e.target as HTMLButtonElement,'Login')}
						>
					Login
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