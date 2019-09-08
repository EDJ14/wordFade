import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import Words from './Words';

const Container = styled.div`
  grid-row: 2 / 3;
  background-color: red;
`;

const FadeWords = styled.div`
  margin: auto;
`;

const Disappear = props => {
  const [fade, setFade] = useState(0);
  const [start, setStart] = useState(0);
  const fadeClass = classNames({ fade: start && fade, nofade: !start });
  return (
    <Container>
      <FadeWords className={fadeClass}>
        <Words reset={setFade} fade={fade} start={setStart} />
      </FadeWords>
    </Container>
  );
};

export default Disappear;
