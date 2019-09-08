import React from 'react';
import styled from 'styled-components';

const Container = styled.input`
  height: 100%;
  width: 100%;
`;

class Words extends React.Component {
  state = { words: '', started: 0 };

  handleChange = e => {
    this.setState({ words: e.target.value });
    if (!this.state.started) {
      this.setState({ started: 1 });
      this.props.start(1);
    }
    this.props.reset(0);
    const prom1 = new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.props.fade));
    });
    prom1.then(val => this.props.reset(1));
  };

  render() {
    return (
      <Container
        type="text"
        value={this.state.words}
        onChange={e => this.handleChange(e)}
      ></Container>
    );
  }
}

export default Words;
