import { useForm, SubmitHandler } from 'react-hook-form';
import { HiArrowNarrowLeft } from 'react-icons/hi';

import { LogoFillWhite } from '../../utils/assets/logoFillWhite';

import {
  Container,
  BodyMain,
  Header,
  HeaderMain,
  Main,
  Button,
  Column,
  Label,
} from './styles';
import { theme } from '../../styles/theme/stitches.config';

interface IFormProps {
  email: string;
  password: string;
}

export function Login() {
  const { register, handleSubmit, reset } = useForm<IFormProps>();

  const onSubmit: SubmitHandler<IFormProps> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Header>
        <LogoFillWhite />
      </Header>
      <Main>
        <HeaderMain>
          <Button>
            <HiArrowNarrowLeft color={theme.colors.red600.value} />
          </Button>
          <h3>Entre na sua conta</h3>
        </HeaderMain>
        <BodyMain>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Column>
              <Label>Seu e-mail</Label>
              <input
                type="email"
                placeholder="Digite seu email"
                {...register('email')}
              />
            </Column>
            <Column>
              <Label>Sua senha</Label>
              <input
                type="password"
                placeholder="Digite sua senha"
                {...register('password')}
              />
            </Column>
            <button>Criar minha conta</button>
          </form>
        </BodyMain>
      </Main>
    </Container>
  );
}
