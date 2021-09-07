export function phonenumberValidator(phonenumber)
{
    if (!phonenumber) return "Phone Number can't be empty."
    if (phonenumber.length < 11) return 'Phone Number must be 03#########.'
   else return ''
}
