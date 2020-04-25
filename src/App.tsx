import React, {Component, Fragment} from 'react';
import './App.less'
import * as redux from 'react-redux';
import SOCKET from './socket';
import {LOGIN_SWITCH, LOADING_SWITCH, SOCKET_SWITCH} from './switch';
import {storage, timeFormat} from './utils'
import {socketConf} from "./env";

const {connect} = redux;


interface Props {

}


class App extends Component {
    private socket: any;

    constructor(props: Props) {
        super(props);

    }

    componentDidMount(): void {
        this.isLogin()
    }

    onSocketMessage = (message: {}) => {
        console.log(message);
    };

    isLogin = () => {
        let userId = storage.getSession('userId')
        // @ts-ignore
        const {history} = this.props;
        if (userId) {
            //开启socket
            this.startSocket()
        } else {
            if (LOGIN_SWITCH) {
                history.replace('/login')
            } else {
                history.replace('/')
            }
        }
    };

    startSocket = () => {
        if (!SOCKET_SWITCH) return;
        this.socket = new SOCKET({
            url: socketConf.url,
            onMessage: this.onSocketMessage
        });
        this.socket.start();
    };

    public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <Fragment>
            <button onClick={() => {

                // @ts-ignore
                const {history} = this.props;
                history.push('/login')
            }}>login
            </button>
            <button onClick={() => {

                // @ts-ignore
                const {history} = this.props;
                console.log(this.props);
                history.push('/loading')
            }}>loading
            </button>
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
