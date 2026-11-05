import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdEmail, MdLock } from 'react-icons/md';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useAuth } from '../../context/auth';
import { loginSchema } from '../../utils/validation';

import {
  Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper, ApiError,
} from './styles';

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [apiError, setApiError] = useState('');

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
    defaultValues: { email: '', senha: '' },
  });

  const onSubmit = async ({ email, senha }) => {
    setApiError('');
    try {
      const { data } = await api.get('/users', {
        params: { email: email.trim().toLowerCase(), senha },
      });

      if (data.length && data[0].id) {
        signIn(data[0]);
        navigate('/feed');
        return;
      }
      setApiError('Usuário ou senha inválido.');
    } catch {
      setApiError('Não foi possível entrar. Verifique se a API está rodando (npm run api).');
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
            <TitleLogin>Faça seu login</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Input
                placeholder="E-mail" type="email" leftIcon={<MdEmail />} name="email"
                control={control} errorMessage={errors.email?.message} autoComplete="email"
              />
              <Input
                type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha"
                control={control} errorMessage={errors.senha?.message} autoComplete="current-password"
              />
              {apiError && <ApiError role="alert">{apiError}</ApiError>}
              <Button
                title={isSubmitting ? 'Entrando...' : 'Entrar'}
                variant="secondary" type="submit" disabled={isSubmitting}
              />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText as={Link} to="/cadastro">Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
