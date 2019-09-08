import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import Words from './Words';

const FadeWords = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
`;

const Disappear = props => {
  const [fade, setFade] = useState(0);
  const [start, setStart] = useState(0);
  const fadeClass = classNames({ fade: start && fade, nofade: !start });
  return (
    <FadeWords className={fadeClass}>
      <Words reset={setFade} fade={fade} start={setStart} />
    </FadeWords>
  );
};

export default Disappear;
