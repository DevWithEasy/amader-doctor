export default function statusColor(status){
    switch (status) {
        case 'Pending':
            return 'bg-blue-100 text-blue-500'
        case 'Confirmed':
            return 'bg-yellow-100 text-yellow-500'
        case 'Completed':
            return 'bg-green-100 text-green-500'
        case 'Rejected':
            return 'bg-red-100 text-red-500'
        default:
            return 'আপনি স্ট্যাটাস প্রবেশ করাননি'
    }
}