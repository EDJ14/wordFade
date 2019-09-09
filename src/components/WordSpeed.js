import React from 'react';

class WordSpeed extends React.Component {
    state = { speed: 0 };

    new Promise((resolve, reject) => {
        setTimeout(() => {
            this.setState({speed: this.props.words.split('').length/(i/60)})
        },500)
    })
    
    render() {
        return this.props.wordnum / this.props.time
    }
}

export default WordSpeed;