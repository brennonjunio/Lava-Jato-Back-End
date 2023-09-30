import * as Yup from 'yup';

export const addClienteValidator = Yup.object().shape({
    nm_cliente: Yup.string().required('Nome Do cliente é obrigatorio'),
    cep: Yup.string().required('Cep do Cliente é obrigatorio')

})