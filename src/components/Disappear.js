import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import Words from './Words';

const FadeWords = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
`;

/*const timeRe = async (set, time) => {
  for (let i = 0; i < 2; i++)
    new Promise(function(resolve, reject) {
      setTimeout(function() {
        set(time + 1);
        console.log(time);
        resolve('foo');
      }, 1000);
    });
};*/

const Disappear = props => {
  const [fade, setFade] = useState(0);
  const [start, setStart] = useState(0);
  const fadeClass = classNames({ fade: start && fade, nofade: !start });
  //timeRe(setTime, time);
  return (
    <FadeWords className={fadeClass}>
      <Words reset={setFade} fade={fade} start={setStart} />
    </FadeWords>
  );
};

export default Disappear;
