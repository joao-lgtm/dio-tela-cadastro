import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().trim().email('E-mail inválido').required('E-mail é obrigatório'),
  senha: yup.string().min(6, 'No mínimo 6 caracteres').required('Senha é obrigatória'),
});

export const cadastroSchema = yup.object({
  nome: yup
    .string()
    .trim()
    .required('Nome é obrigatório')
    .min(3, 'No mínimo 3 caracteres')
    .matches(/^[A-Za-zÀ-ÿ'´`^~ ]+$/, 'Use apenas letras'),
  email: yup.string().trim().email('E-mail inválido').required('E-mail é obrigatório'),
  senha: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'No mínimo 6 caracteres')
    .matches(/[A-Za-z]/, 'Inclua pelo menos uma letra')
    .matches(/\d/, 'Inclua pelo menos um número'),
});
