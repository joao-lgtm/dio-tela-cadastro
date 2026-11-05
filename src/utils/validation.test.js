import { cadastroSchema, loginSchema } from './validation';

const valido = { nome: 'João Paulo', email: 'joao@email.com', senha: 'abc123' };
const erroDe = async (schema, dados) => {
  try { await schema.validate(dados); return null; } catch (e) { return e.message; }
};

test('cadastro válido', async () => expect(await erroDe(cadastroSchema, valido)).toBeNull());
test('nome obrigatório', async () =>
  expect(await erroDe(cadastroSchema, { ...valido, nome: '' })).toBe('Nome é obrigatório'));
test('nome só com letras', async () =>
  expect(await erroDe(cadastroSchema, { ...valido, nome: 'João123' })).toBe('Use apenas letras'));
test('e-mail inválido', async () =>
  expect(await erroDe(cadastroSchema, { ...valido, email: 'joao@' })).toBe('E-mail inválido'));
test('senha curta', async () =>
  expect(await erroDe(cadastroSchema, { ...valido, senha: 'a1' })).toBe('No mínimo 6 caracteres'));
test('senha sem número', async () =>
  expect(await erroDe(cadastroSchema, { ...valido, senha: 'abcdef' })).toBe('Inclua pelo menos um número'));
test('login válido', async () =>
  expect(await erroDe(loginSchema, { email: 'a@b.com', senha: '123456' })).toBeNull());
