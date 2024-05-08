const notificationFiltration=(type,notifications)=>{
    if(type== 'read'){
        return notifications.filter(appoint=> appoint.status === true)
    }else{
        return notifications.filter(appoint=> appoint.status === false)
    }
}

export default notificationFiltration