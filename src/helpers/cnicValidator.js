export function cnicValidator(cnic)
{
    if (!cnic) return "Cnic Number can't be empty."
    if (cnic.length < 15) return 'Cnic Number must be 331***********.'
     else  return ''
}
