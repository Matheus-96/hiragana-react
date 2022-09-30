export const validateEmail = () => {
	return
}

export function Validate(regex: RegExp, value: string){
	return regex.test(value)
}

export function validateLetter(value: string){
	return /[a-z A-Z]/g.test(value)
}
export function validateNumber(value: string){
	return /[0-9]/g.test(value)
}
export function validateLength(value: string, min: number){
	return value.length >= min
}

export function ValidatePassword(password: string){
	return ![
		validateLetter(password),
		validateNumber(password),
		validateLength(password, 6)
	].includes(false)
}