import axios from "axios";
import api_url from "./apiurl";

class SocketManager{
    constructor(socket,addNotifications){
        this.socket = socket
        this.addNotifications = addNotifications
    }
    getAllNotifications=async()=>{
        try {
            const res = await axios.get(`${api_url}/api/auth/notifications`,{
                headers : {
                    authorization : 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            if(res.data.success){
                this.addNotifications(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    create_appointment(){
        this.socket.on('create_appointment_notification', async(notification)=>{
            this.getAllNotifications()
        })
    }
}

export default SocketManager;