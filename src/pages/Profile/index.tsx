import { BigHead } from '@bigheads/core';
import { HiArrowSmLeft } from 'react-icons/hi';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { LogoFillRed } from '../../utils/assets/logoFillRed';

import {
  Container,
  Header,
  FirstSectionHeader,
  SecondSectionHeader,
  ContainerHeader,
  Body,
  HeaderBody,
  HeaderCoursel,
  Scoreboard,
  ContainerScore,
  Circle,
} from './styles';

export function Profile() {
  return (
    <Container>
      <Header>
        <ContainerHeader>
          <FirstSectionHeader>
            <LogoFillRed />
            <BigHead />
          </FirstSectionHeader>
          <SecondSectionHeader>
            <button>
              <HiArrowSmLeft />
            </button>
            <h1>Icaro Vieira</h1>
          </SecondSectionHeader>
        </ContainerHeader>
      </Header>
      <Body>
        <HeaderBody>
          <h3>Seus Palpites</h3>
          <HeaderCoursel>
            <button>
              <MdKeyboardArrowLeft />
            </button>
            <span>20 de novembro</span>
            <button>
              <MdKeyboardArrowRight />
            </button>
          </HeaderCoursel>
        </HeaderBody>
        <Scoreboard>
          <span>13:00</span>
          <ContainerScore>
            <div>
              <span>ALE</span>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fflagpoles.co.uk%2Fwp-content%2Fuploads%2F2019%2F06%2FGermany.png&f=1&nofb=1&ipt=074b65c0b7b7a230985c888cae58a5ec1bf3c688b44f2af49f4f21411ba54bb3&ipo=images"
                alt=""
              />
              <Circle>1</Circle>
            </div>
            <span>X</span>
            <div>
              <Circle>1</Circle>

              <img
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.flagz.co.nz%2Fwp-content%2Fuploads%2F2013%2F08%2Fecuador-flag-750x505.png&f=1&nofb=1&ipt=49d75343d79d95a87ecfc46502e4812d3d05acf5f766a4916ac62a2ee22b954f&ipo=images"
                alt=""
              />
              <span>EQU</span>
            </div>
          </ContainerScore>
        </Scoreboard>
      </Body>
    </Container>
  );
}
