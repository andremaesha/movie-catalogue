import NotificationHelper from "./notification-helper";
import CONFIG from "../globals/config";

const WebSocketInitiator = {
    init(url){
        const webSocket = new WebSocket(url);
        webSocket.onmessage = this._onMessagehandler;
    },

    _onMessagehandler(message){
        const data = JSON.parse(message.data)

        NotificationHelper.sendNotification({
            title: `${data.title} is on cinema!`,
            options: {
                body: data.overview,
                image: `${CONFIG.BASE_IMAGE_URL + data.poster_path}`,
            }
        })
    }
};

export default WebSocketInitiator;