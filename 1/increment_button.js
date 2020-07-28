'use strict';

const e = React.createElement;

class IncrementButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render(){
        return e(
            'button',
            {className: "btnPrimary", onClick: () => this.setState({count: this.state.count+1})},
            this.state.count
        );
    }
}

const domContainer = document.querySelector('#increment_button_container');
ReactDOM.render(e(IncrementButton), domContainer);