import * as Yup from 'yup';

export const addClienteValidator = Yup.object().shape({
    
    nm_cliente: Yup.string().required('Nome Do cliente é obrigatorio'),
    cpf_cnpj: Yup.string().required('CPF ou CNPJ Do cliente é obrigatorio'),
    cep: Yup.string().required('CEP do Cliente é obrigatorio'),
    bairro: Yup.string().required('Bairro do Cliente é obrigatorio'),
    nr_casa: Yup.string().required('Nr da casa do Cliente é obrigatorio'),



})
