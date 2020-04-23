import React, {Component} from 'react';


import * as redux from 'react-redux';


const {connect} = redux

// console.log(connect);
interface props {

}

class App extends Component {
    constructor(props: props) {
        super(props);

    }

    componentDidMount(): void {

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div></div>;
    }
}

const mapStateToProps = (store: object) => {
    return store;
};
const mapDispatchToProps = (dispatch: void) => {
    return {
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
