import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';
import { useAuth } from '../../context/auth';

import {
  Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture, Actions, Sair,
} from './styles';

const AVATAR_PADRAO = 'https://avatars.githubusercontent.com/u/45184516?v=4';

const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const autenticado = !!user;

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to={autenticado ? '/feed' : '/'}>
            <img src={logo} alt="Logo da DIO" />
          </Link>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <>
              <UserPicture src={AVATAR_PADRAO} alt={user.name} title={user.name} />
              <Sair type="button" onClick={handleSignOut}>Sair</Sair>
            </>
          ) : (
            <Actions>
              <MenuRight as={Link} to="/">Home</MenuRight>
              <Button title="Entrar" onClick={() => navigate('/login')} />
              <Button title="Cadastrar" onClick={() => navigate('/cadastro')} />
            </Actions>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
