
const regex_email = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.[a-zA-Z.]+[a-zA-Z]+/gi
const number = /^[0-9]+/gi

export const emailValid = (email) =>
{
    return (regex_email.test(email) && email.trim().length > 0)
}
export const validNumber = (number_to_test) => {
    return number.test(number_to_test)
}