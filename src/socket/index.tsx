import SOCKET from './socket'


interface SocketConf {
    url: string,

    onOpen?(): void,

    onMessage?(data: any): void,

    onError?(): void
}

class websocket {
    constructor(socketConf: { onMessage(message: {}): void; url: string }) {
        this.url = socketConf.url
        this.socketConf = socketConf
    }

    private url: string = ''
    private taskRemindInterval: any = null
    private instence: any = null
    private socketConf: SocketConf
    public start = () => {
        this.instence = new SOCKET({
            url: this.url,
            socketMessage: this.socketMessage,
            socketError: this.socketError,
            socketOpen: this.socketOpen
        })
        this.instence.connection()
    }
    public socketMessage = (receive: MessageEvent) => {
        console.log(receive);
        if (receive && receive.data !== 'pong') {
            console.log('receive', receive);
            if (receive) {
                if (receive.data !== 'pong') {
                    const {onMessage} = this.socketConf
                    onMessage && onMessage(receive.data)
                }
            }
        }
    }
    public socketError = () => {
        clearInterval(this.taskRemindInterval);

    }
    public socketOpen = () => {
        this.taskRemindInterval = setInterval(() => {
            this.instence.sendMessage('ping')
        }, 200000)
    }
}

export default websocket
