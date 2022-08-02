import styled from 'styled-components'


export const Container = styled.div`
		min-height: 100vh;
		background-color: ${props => props.theme['background-light']};
		display: flex;
		flex-direction: column;
		position: relative;
		/* background: url('assets/images/hiragana.png');
		background-position: bottom right;
		background-size: 35%;
		background-repeat: no-repeat; */
		
`

export const Main = styled.main`
		max-width: 60%;
		height: 100%;
		margin: 0 auto;
		padding: 1rem 0;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		flex-grow: 1;
		@media screen and (max-width: 768px){
			max-width: 90%;
		}
`
export const Article = styled.article `
padding: 1rem 0;
`
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding:1rem 0;
	@media screen and (max-width:768px){
		flex-direction:column;
		align-items: center;
		min-height: 100px;
	}
`

export const Footer = styled.footer`
min-height: 80px;
background-color: ${props => props.theme['color-emphasis']};
display: flex;
justify-content: center;
align-items: center;

	.icon {
		filter: invert(100%);
	}
`
export const Link = styled.a`
		font-family: 'Montserrat';
		color: white;
		text-decoration: none;
		font-weight: bold;
		margin-left: 5px;
		position: relative;
		&:visited{
			color: white;
		}
		&:hover::after{
			opacity: 1;
		}
		&::after{
			transition: opacity .25s;
			content: 'Matheus-96';
			position: absolute;
			opacity: 0;
			border-bottom: 2px solid white;
			left: 0;
		}
		
`