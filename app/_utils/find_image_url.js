import api_url from "./apiurl"

const find_image_url=(user)=>{
    if(user.gender === 'Male' && user.image.url === '/image/users/default_profile.png'){
        return '/image/m_doctor.png'
    }else if(user.gender === 'FeMale' && user.image.url === '/image/users/default_profile.png'){
        return '/image/w_doctor.png'
    }else{
        return `${api_url}/${user?.image?.url}`
    }
}

export default find_image_url;