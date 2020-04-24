import React, {Component, Fragment} from 'react';
import * as redux from 'react-redux';

import {Permission} from '../../api'

const {connect} = redux


interface props {

}

class Login extends Component {
    constructor(props: props) {
        super(props);

    }

    componentDidMount(): void {
        console.log(Permission);
        Permission.login({})
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Fragment>login</Fragment>;
    }
}

const mapStateToProps = (store: {}) => {
    return store;
};
const mapDispatchToProps = (dispatch: void) => {
    return {
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
