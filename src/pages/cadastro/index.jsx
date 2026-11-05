import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useAuth } from '../../context/auth';
import { cadastroSchema } from '../../utils/validation';

import {
  Container, Column, Wrapper, Title, TitleCadastro, SubtitleCadastro,
  TermsText, LoginText, ApiError,
} from './styles';

const Cadastro = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [apiError, setApiError] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(cadastroSchema),
    mode: 'onChange',
    defaultValues: { nome: '', email: '', senha: '' },
  });

  const onSubmit = async ({ nome, email, senha }) => {
    setApiError('');
    try {
      const emailNormalizado = email.trim().toLowerCase();

      // evita e-mail duplicado
      const { data: existentes } = await api.get('/users', { params: { email: emailNormalizado } });
      if (existentes.length) {
        setApiError('Este e-mail já está cadastrado. Faça login.');
        return;
      }

      const { data: novoUsuario } = await api.post('/users', {
        name: nome.trim(),
        email: emailNormalizado,
        senha, // em produção: nunca salvar senha em texto puro (o back-end faria o hash)
      });

      signIn(novoUsuario);
      navigate('/feed');
    } catch {
      setApiError('Não foi possível criar sua conta. Verifique se a API está rodando (npm run api).');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCadastro>Comece agora grátis</TitleCadastro>
            <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Input
                name="nome"
                control={control}
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
                errorMessage={errors.nome?.message}
                autoComplete="name"
              />
              <Input
                name="email"
                control={control}
                type="email"
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                errorMessage={errors.email?.message}
                autoComplete="email"
              />
              <Input
                name="senha"
                control={control}
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                errorMessage={errors.senha?.message}
                autoComplete="new-password"
              />

              {apiError && <ApiError role="alert">{apiError}</ApiError>}

              <Button
                title={isSubmitting ? 'Criando...' : 'Criar minha conta'}
                variant="secondary"
                type="submit"
                disabled={!isValid || isSubmitting}
              />
            </form>

            <TermsText>
              Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de
              Privacidade e os Termos de Uso da DIO.
            </TermsText>
            <LoginText>
              Já tenho conta. <Link to="/login">Fazer login</Link>
            </LoginText>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
