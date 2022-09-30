export function validateFields(email: boolean | null, password: boolean | null){
    let validationFailed = [
        email,
        password
    ].includes(false)
    return !validationFailed
}
