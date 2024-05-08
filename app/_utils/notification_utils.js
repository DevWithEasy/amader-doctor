import axios from "axios"
import api_url from "./apiurl"

export async function seenNotification(id ,readSingleNotification) {
    const res = await axios.post(`${api_url}/api/auth/seen-notification/${id}`, {}, {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
    })
    if (res.data.status === 200) {
        readSingleNotification(id)
    }
}
export async function seenAllNotification(addUser,readAllNotifications) {
    const res = await axios.post(`${api_url}/api/auth/user/seenAllNotification`, {}, {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
    })
    if (res.data.status === 200) {
        addUser(res.data.data)
        readAllNotifications()
    }
}

export async function deleteAllNotification(addUser,deleteAllNotifications) {
    const res = await axios.post(`${api_url}/api/auth/user/deleteAllNotification`, {}, {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
    })
    if (res.data.status === 200) {
        addUser(res.data.data)
        deleteAllNotifications()
    }
}