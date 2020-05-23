import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loding?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loding, ...rest }) => (
  <Container type="button" {...rest}>
    {loding ? 'Carregando ...' : children}
  </Container>
);

export default Button;
