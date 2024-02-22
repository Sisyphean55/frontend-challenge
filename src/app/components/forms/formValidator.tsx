export default function FormValidator(formData: object) {
    var validationResponse = []
    Object.entries(formData).forEach(([key, value]) => {
        if (!value || value === '') {
            validationResponse.push({ input: key, message: 'Existen campos vacíos' });
        }
        if (key === 'name' && ! /^[a-zA-Z ]+$/.test(value)) {
            validationResponse.push({ input: key, message: 'Nombre no debería tener números o caracteres especiales' });
        }
        if (key === 'email' && ! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            validationResponse.push({ input: key, message: 'Formato de Email incorrecto' });
        }
        if (key === 'phone' &&  ! /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(value)) {
            validationResponse.push({ input: key, message: 'Formato de teléfono incorrecto' });
        }
    });
    return validationResponse;
}