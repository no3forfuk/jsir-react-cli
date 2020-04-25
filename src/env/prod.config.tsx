import {storage} from "../utils";

function getSocketConf() {
    const uri = '/notification/v1.0.0/ws/';
    const {
        location: {
            host,
            protocol
        }
    } = window;
    const userId = storage.getSession('userId');
    return {
        url: `${protocol === 'http' ? 'ws://' : 'wss://'}${host}${uri}${userId}`
    }

}

const prod = {
    socketConf: getSocketConf()
};
export default prod
