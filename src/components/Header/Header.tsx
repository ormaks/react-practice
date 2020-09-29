import React, { FC } from 'react';
import { HeaderStyled } from './Header.styled';

interface IProps {
  headerText?: string;
}

const Header: FC<IProps> = ({ headerText }) => {
  return <HeaderStyled>{headerText}</HeaderStyled>;
};

export default Header;
