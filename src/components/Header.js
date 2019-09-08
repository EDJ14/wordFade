import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  grid-row: 1 / 2;
  background-color: green;
`

const Header = props => {
  return <HeaderBox/>;
};

export default Header;
