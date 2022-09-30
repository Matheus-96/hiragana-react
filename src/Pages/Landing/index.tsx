/* eslint-disable no-useless-escape */
import { Button } from "../../Components/Buttons";
import { Paragraph } from "../../Components/Paragraph";
import { Subtitle } from "../../Components/Subtitle";
import { Title } from "../../Components/Title";
import * as S from './Styles'
import {ReactComponent as GithubIcon} from '../../assets/images/github.svg'
import * as M from '../../Components/Modal'
import * as Inputs from '../../Components/Input'
import * as V from '../../Components/Input/Validations'
import { useEffect, useState } from "react";
import { ModalStates } from "../../Components/Modal/interfaces";
import { Header } from "../../Components/Header";
import LoadingIcon from '../../assets/images/loading.gif';
import { db } from '../../firebase/firebase-config';
import {collection, addDoc, getDoc} from 'firebase/firestore' ;
import { modalContainerState } from "./interfaces";
import { validateFields } from "./functions";
import { useNavigate } from "react-router-dom";

export default function Landing(){
	const navigator = useNavigate()
	const [modalState, setModalState] = useState<ModalStates>('hidden')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailValid, setEmailValid] = useState<boolean | null>(null)
	const [passwordValid, setPasswordValid] = useState<boolean | null>(null)

	const [modalContainerState, setModalContainerState] = useState<modalContainerState>('none')
	const [modalContainerVisibility, setModalContainerVisibility] = useState<ModalStates>('hidden')

	const usersCollectionRef  = collection(db, 'users');
	
	function toggleModal(){ M.toggleVisibility(modalState, setModalState) }

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

	async function registerUser(){

		const RELOAD_TIMER = 5000
		const ANIMATION_FADE_TIME = 500

		if(validateFields(emailValid, passwordValid)){

			handleVisibility()

			setTimeout(() => {
				setModalContainerState('loading')
			}, ANIMATION_FADE_TIME);
			
			let result = await addDoc(usersCollectionRef, {nome: "Teste", email: email, senha: password})
			
			handleVisibility()
			
			setTimeout(() => {
				setModalContainerState('created')
				setTimeout(() => {
					
				}, RELOAD_TIMER);
			}, ANIMATION_FADE_TIME);
			return
		}

		handleVisibility()
			
		setTimeout(() => {
			setModalContainerState('validationFail')
		}, ANIMATION_FADE_TIME);
	}
		
	function showRequirements() {
		const ANIMATION_FADE_TIME = 500
		if(modalContainerState !== 'requirements'){

			if(modalContainerVisibility === 'hidden') setModalContainerState('requirements')
			handleVisibility()

			setTimeout(() => {
				setModalContainerState('requirements')
			}, ANIMATION_FADE_TIME)
		}
	}
	function handleVisibility(){
		if(modalContainerVisibility == 'open') M.visibilityOutIn(modalContainerVisibility, setModalContainerVisibility)
		else M.toggleVisibility(modalContainerVisibility, setModalContainerVisibility)
		
	}
	useEffect(()=> {
		
	}, [])

	return(
		<S.Container>
			{/* register */}
			<M.Backdrop
				state={modalState}
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
						<Inputs.InputGroup>
							<Inputs.CustomLabel htmlFor="email">E-mail</Inputs.CustomLabel>
							<Inputs.CustomInput
								type='email'
								placeholder="name@email.com"
								value={email}
								id='email'
								className={`${emailValid === false? 'error':''}`}
								onChange={(e)=>setEmail(e.target.value)}
								onBlur={(e)=>setEmailValid(V.Validate(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, email))}
								/>
								<Inputs.Hint className={`${emailValid === false ? 'visible' : ''}`}>Invalid e-mail address</Inputs.Hint>
						</Inputs.InputGroup>
						<Inputs.InputGroup>
							<Inputs.CustomLabel htmlFor="password">Password</Inputs.CustomLabel>
							<Inputs.CustomInput
								type='password'
								placeholder="password"
								value={password}
								id='password'
								className={`${passwordValid === false? 'error':''}`}

								onChange={(e)=>setPassword(e.target.value)}
								onBlur={(e)=>setPasswordValid(V.ValidatePassword(e.target.value))}
								onFocus={showRequirements}
								/>
								<Inputs.Hint className={`${passwordValid === false ? 'visible' : ''}`}>Invalid password</Inputs.Hint>

						</Inputs.InputGroup>
							<M.Container state={modalContainerVisibility} direction="column" >
								{ modalContainerState == "requirements" &&
									<>
										<Inputs.Requirement  valid={V.validateLength(password, 6)}>
											Must contain at least 6 characters
										</Inputs.Requirement>
										<Inputs.Requirement valid={V.validateLetter(password)}>
											1 letter
										</Inputs.Requirement>
										<Inputs.Requirement valid={V.validateNumber(password)}>
											1 number
										</Inputs.Requirement>
									</>
								}
								{ modalContainerState == 'loading' &&
									<M.Img src={LoadingIcon} alt="Loading" />
								}

								{ modalContainerState == 'created' &&
									<M.Subtitle>
										Usuário cadastrado!	
									</M.Subtitle>
								}

								{ modalContainerState == 'validationFail' &&
									<M.Subtitle>
										Erro de validação!
									</M.Subtitle>
								}
							</M.Container>
						<Inputs.InputGroup>
							<Button
								btnType="primary"
								onClick={registerUser}>
								Register
							</Button>
						</Inputs.InputGroup>
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
						size='md'
						onMouseOver={e=> changeText(e,'ログイン')}
						onMouseOut={e=> changeText(e,'Login')}
						onClick={()=> navigator("/login")}
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