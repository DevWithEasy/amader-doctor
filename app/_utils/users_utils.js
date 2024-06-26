import axios from "axios"
import api_url from "./apiurl"
import socket from "./socket"

export async function handleSignUp(value, router, toast) {
    try {
        const res = await axios.post(`${api_url}/api/auth/signup`, value)

        localStorage.setItem('accessToken', res.data.token)

        router.push('/user/verify')

        return toast({
            description: "আপনার একাউন্টটি সফল ভাবে তৈরি হয়েছে",
            status: 'success',
            duration: 2000,
            isClosable: true,
        })
    } catch (error) {
        console.log(error)

        return toast({
            title : "আপনার একাউন্ট তৈরিতে ব্যর্থ হয়েছে",
            description: error?.response?.data?.message || error?.message ,
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
    }
}

export async function handleSignIn(data) {
    const {value, addUser,addNotifications, setLoading, router, toast,setView} = data
    try {
        setLoading(true)
        const res = await axios.post(`${api_url}/api/auth/signin`, value)
        if (res.data.status === 200) {
            setLoading(false)

            if (!res.data.data.isVerified) {
                localStorage.setItem('accessToken', res.data.data.token)
                router.push('/user/verify')

            } else {

                localStorage.setItem('accessToken', res.data.data.token)
                addUser((res.data.data))

                addNotifications(res.data.data.notifications)

                socket.emit('join_chat', { id: res.data.data._id })

                if(setView){
                    return setView(false)
                }else{
                    if (location.state?.from) {
                        router.push(location.state.from)
                    } else {
                        router.push('/')
                    }
                }
            }
        }
    } catch (error) {
        setLoading(false)
        console.log(error)
        if (error?.message) {
            return toast({
                description: error.message,
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        } else {
            return toast({
                description: 'প্রবেশ করতে সমস্যা হচ্ছে !',
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        }
    }
}

export async function getUser(id, setUser, setAddress) {
    const res = await axios.get(`${api_url}/api/auth/user/${id}`, {
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
    })
    setUser(res.data.data)
    setAddress(res.data.data.address)
}

export async function updateUser(data) {
    const{id, value, setUser,setAddress, addUser, toast} = data
    try {
        const res = await axios.put(
            `${api_url}/api/auth/user/update/${id}`,
            value,
            {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
        if (res.data.status === 200) {
            setUser(res.data.data)
            addUser((res.data.data))
            if(setAddress){
                setAddress(res.data.data.address)
            }
            return toast({
                title : 'আপডেট সফল',
                description: 'প্রোফাইল আপডেট সফল হয়েছে।',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        }
    } catch (error) {
        console.log(error)
        return toast({
            title : 'আপডেট ব্যর্থ',
            description: 'প্রোফাইল আপডেট সফল হয়নি।',
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
    }
}

export async function uploadPhoto(user, file, reload, setLoading, toast) {
    setLoading(true)
    try {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('filename', file?.name)
        const res = await axios.post(`${api_url}/api/auth/upload/${user?._id}`, formData, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('accessToken')
            }
        })
        if (res.data.success === true) {
            reload()
            toast.success('Profile Photo uploaded successfully')
            setLoading(false)
        }
    } catch (error) {
        console.log(error)
        toast.error('Profile Photo uploaded failed')
        setLoading(false)
    }
}

export async function handleVerify(code, router, setLoading, setVerified, toast) {
    if (!code) {
        return toast({
            title: 'কোড লিখুন',
            description: "অনুগ্রহ পূর্বক যাচাইকরন কোড টি লিখুন",
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
    }
    try {
        setLoading(true)
        const res = await axios.post(`${api_url}/api/auth/verify`, { code }, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('accessToken')
            }
        })
        if (res.data.status === 200) {
            setLoading(false)
            setVerified(true)
            setTimeout(() => {
                router.push('/user/signin')
            }, 2000)
        }
    } catch (error) {
        setLoading(false)
        toast.error('Verification Failed')
    }

}

export async function handleSendCodeAgain(toast) {
    if (!localStorage.getItem('accessToken')) {
        return toast.error('Please signin first time')
    }
    try {
        const res = await axios.post(`${api_url}/api/auth/sent-code-again`, {}, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('accessToken')
            }
        })
        if (res.data.status === 200) {
            return toast({
                title: 'সফল হয়েছে',
                description: "ভেরিফিকেশন কোড পাঠানো হয়েছে",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        }
    } catch (error) {
        return toast({
            title: 'ব্যর্থ হয়েছে',
            description: "ভেরিফিকেশন কোড পাঠাতে আবার চেষ্টা করুন",
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
    }

}

export async function handlefind(email, setUser, setEmail, setFinding, setLoading, toast) {
    if (!email) {
        return toast.error('অনুগ্রহ পূর্বক ই-মেইল অথবা মোবাইল নাম্বার টি লিখুন')
    }
    setLoading(true)
    try {
        const res = await axios.get(`${api_url}/api/auth/find?email=${email}`)
        if (res.data.status === 200) {
            setUser(res.data)
            setEmail('')
            setFinding(res.data.find)
            setLoading(false)
        }
    } catch (error) {
        setLoading(false)
        toast.error('Something went wrong')
    }

}

export async function handleSendForget(user, setLoading, setSending) {
    try {
        setLoading(true)
        const res = await axios.post(`${api_url}/api/auth/forget-password?email=${user.data.email}`)
        if (res.data.status === 200) {
            setLoading(false)
            setSending(true)
        }
    } catch (error) {
        setLoading(false)
        setSending(false)
    }

}