import React, {Component, Fragment} from 'react';
import * as redux from 'react-redux';
import SOCKET from './socket'
import {
    RouteComponentProps,
} from "react-router-dom";

const {connect} = redux;

// console.log(RouteComponentProps);

interface Props extends RouteComponentProps {
    // history: H.History<S>;
    // location: H.Location<S>;
    // match: match<Params>;
    // staticContext?: C;
}


class App extends Component {
    constructor(props: Props) {
        super(props);

    }

    componentDidMount(): void {
        let socket = new SOCKET({
            url: 'ws://192.168.101.37:30080/notification/v1.0.0/ws/13412345678',
            onMessage: this.onSocketMessage
        })
        socket.start()
    }

    onSocketMessage = (message: {}) => {

    }

    public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Fragment>
            <button onClick={() => {

                // @ts-ignore
                const {history} = this.props;
                console.log(this.props);
                history.push('/login')
            }}>login
            </button>
            <button>loading</button>
        </Fragment>;
    }
}

const mapStateToProps = (store: {}) => {
    return store;
};
const mapDispatchToProps = (dispatch: void) => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
