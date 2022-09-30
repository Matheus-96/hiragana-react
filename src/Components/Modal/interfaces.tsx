import { type } from "os"

export interface IModal {
	state: ModalStates
}

export type ModalStates = 'hidden' | 'open' | 'closing'

export type FlexDirection = 'column' | 'row'