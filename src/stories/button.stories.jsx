import {Button as Btn} from "../Components/Buttons";
import { ThemeProvider } from "styled-components";
import {theme} from '../Styles/Themes';

export default {
	component: Btn,
	title: 'Actions/Buttons/',
	excludeStories: /.*Data$/
};

export const Primary = () => <ThemeProvider theme={theme}><Btn btnType="primary">Try me</Btn></ThemeProvider>
export const Outline = () => <ThemeProvider theme={theme}><Btn btnType="outline">Try me</Btn></ThemeProvider>