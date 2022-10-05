import { Helmet } from 'react-helmet-async';
import { HiArrowNarrowLeft } from 'react-icons/hi';

import { LogoFillWhite } from '../../utils/assets/logoFillWhite';
import { theme } from '../../styles/theme/stitches.config';

import {
  Container,
  Header,
  HeaderMain,
  Main,
  Button,
  BodyMain,
  Form,
  Column,
  Label,
} from './styles';
import { useNavigate } from 'react-router-dom';

export function CreateAccount() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Criar conta NaTrave</title>
      </Helmet>
      <Container>
        <Header>
          <LogoFillWhite />
        </Header>
        <Main>
          <HeaderMain>
            <Button onClick={() => navigate('/')}>
              <HiArrowNarrowLeft color={theme.colors.red600.value} />
            </Button>
            <h3>Crie sua conta</h3>
          </HeaderMain>
          <BodyMain>
            <Form>
              <Column>
                <Label>Seu nome</Label>
                <input placeholder="Digite seu nome" />
              </Column>
              <Column>
                <Label>Seu nome de usuário</Label>
                <input placeholder="Digite um nome de usuário" />
              </Column>
              <Column>
                <Label>Seu e-mail</Label>
                <input placeholder="Digite seu e-mail" />
              </Column>
              <Column>
                <Label>Sua senha</Label>
                <input placeholder="Digite uma senha" type="password" />
              </Column>
              <button>Criar minha conta</button>
            </Form>
          </BodyMain>
        </Main>
      </Container>
    </>
  );
}
