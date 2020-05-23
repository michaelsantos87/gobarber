import React from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NexAppointment,
  Calender,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
// https://avatars0.githubusercontent.com/u/13962389?s=460&u=d3251f7482cb0e81a970a85cdfed1cb68af4f2ec&v=4
const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBaber Logo" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários Agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NexAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/13962389?s=460&u=d3251f7482cb0e81a970a85cdfed1cb68af4f2ec&v=4"
                alt="Logo"
              />
              <strong>Michael Santos</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NexAppointment>
        </Schedule>
        <Calender />
      </Content>
    </Container>
  );
};

export default Dashboard;
