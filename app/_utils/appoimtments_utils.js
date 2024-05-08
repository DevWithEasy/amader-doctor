import axios from "axios";
import socket from "./socket";
import api_url from "./apiurl";
import { errorToast, successToast } from "./makeToast";

export async function submitAppointment(data){
    const {user,value,toast,router,setView,setBalanceView} = data
    if(!user?._id){
        return setView(true)
    }
    if(!value.chamber._id){
        return errorToast({
            toast,
            description : "আপনি কোন চেম্বার সিলেক্ট করেনি।"
        })
    }else if(!value.name){
        return errorToast({
            toast,
            description : "রোগীর নাম লিখুন"
        })
    }else if(!value.age){
        return errorToast({
            toast,
            description : "রোগীর বয়স লিখুন"
        })
    }else if(!value.gender){
        return errorToast({
            toast,
            description : "রোগীর লিঙ্গ লিখুন"
        })
    }else if(!value.address){
        return errorToast({
            toast,
            description : "রোগীর ঠিকানা লিখুন"
        })
    }else if(!value.phone){
        return errorToast({
            toast,
            description : "রোগীর যোগাযোগের নাম্বার লিখুন"
        })
    }
    
    try {
        const res = await axios.post(`${api_url}/api/appointment/add`,value,{
            headers : {
                authorization : 'Bearer ' + localStorage.getItem('accessToken')
            }
        })
        if(res.data.status === 200){
            successToast({
                toast,
                description: res.data.message
            })
            console.log(res.data.data)
            socket.emit('create_appointment',res.data.data)
            
            router.push(`/user/${user._id}/appointments`)
        }
    } catch (error) {
        if(error.response.data.status === 405){
            return setBalanceView(true)
        }
        toast.error(error.response.data.message)
    }
}

export async function getAllAppointments(id,setAppointments){
    const res = await axios.get(`${api_url}/api/appointment/all/${id}`,{
        headers : {
            authorization : 'Bearer ' + localStorage.getItem('accessToken')
        }
    });
    setAppointments(res.data.data);
}

export async function cancelAppointment(id,user,toast,setAppointments){
    try {
        const res = await axios.put(`${api_url}/api/appointment/cancel/${id}`,{},{
            headers : {
                authorization : 'Bearer ' + localStorage.getItem('accessToken')
            }
        });
        if(res.data.status === 200){
            getAllAppointments(user?._id,setAppointments)
        }
    } catch (error) {
        if(error){
            toast.error(error.response.data.message)
        }
    }
    
}

export async function getDoctorAppointments(date,setAppointments){
    const res = await axios.get(`${api_url}/api/appointment/all/search?&date=${new Date(date).toLocaleDateString()}`,{
        headers : {
            authorization : 'Bearer ' + localStorage.getItem('accessToken')
        }
    })
    setAppointments(res.data.data)
}

export async function confirmAppointment(id,day,date,setAppointments){
    const res = await axios.put(`${api_url}/api/appointment/confirm/${id}`,{},{
        headers : {
            authorization : 'Bearer ' + localStorage.getItem('accessToken')
        }
    });
    if(res.data.status === 200){
        getAppointments(day,date,setAppointments)
        socket.emit('action_appointment',res.data.data)
    }
}

export async function completeAppointment(id,day,date,setAppointments){
    const res = await axios.put(`${api_url}/api/appointment/complete/${id}`,{},{
        headers : {
            authorization : 'Bearer ' + localStorage.getItem('accessToken')
        }
    });
    if(res.data.status === 200){
        getAppointments(day,date,setAppointments)
    }
}

export async function rejectAppointment(id,day,date,setAppointments){
    const res = await axios.put(`${api_url}/api/appointment/reject/${id}`,{},{
        headers : {
            authorization : 'Bearer ' + localStorage.getItem('accessToken')
        }
    });
    if(res.data.status === 200){
        getAppointments(day,date,setAppointments)
        socket.emit('action_appointment',res.data.data)
    }
}

export async function getAppointmentDetails(id,setAppointment,setChamber){
    try{
        const res = await axios.get(`${api_url}/api/appointment/details/${id}`,{
            headers : {
                authorization : 'Bearer ' + localStorage.getItem('accessToken')
            }
        })
        if(res.status === 200){
            setAppointment(res.data.data)
            setChamber(res?.data?.data?.doctor?.chambers.find(c => c._id === res.data?.data?.chamberId))
        }
    }catch(err){
        console.log(err)
    }
}

export async function getAppointmentStatus(appointment,setLoading,setStatus){
    setLoading(true)
    try {
        const res = await axios.get(`${api_url}/api/appointment/status?dId=${appointment?.doctor?._id}&date=${appointment?.appointmentDate}&aId=${appointment?._id}`,{
            headers : {
                authorization : 'Bearer ' + localStorage.getItem('accessToken')
            }
        })

        if(res.data.status === 200){
            setLoading(false)
            setStatus(res.data)
        }
    } catch (error) {
        setLoading(false)
        console.log(error)
    }
}