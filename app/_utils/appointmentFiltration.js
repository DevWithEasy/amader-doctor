const appointmentFiltration=(type,appointments)=>{
    if(type== 'complete'){
        return appointments.filter(appoint=> appoint.status === 'Completed' || appoint.status === 'Canceled')
    }else{
        return appointments.filter(appoint=> appoint.status==='Confirmed' || appoint.status==='Pending')
    }
}

export default appointmentFiltration