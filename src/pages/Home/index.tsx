import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { Column, Container, ContainerContent, Image, Nav } from './styles';

import { LogoFillWine } from '../../utils/assets/logoFillWine';

export function Home() {
  return (
    <>
      <Helmet>
        <title>NaTrave</title>
      </Helmet>
      <Container>
        <div>
          <LogoFillWine />
        </div>
        <ContainerContent>
          <Image src="/assets/img.png" alt="Na trave" loading="lazy" />

          <Column>
            <h1>Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>
            <Nav>
              <ul>
                <li>
                  <Link to="/create">Criar minha conta</Link>
                </li>
                <li>
                  <Link to="/login">Fazer login</Link>
                </li>
              </ul>
            </Nav>
          </Column>
        </ContainerContent>
      </Container>
    </>
  );
}
