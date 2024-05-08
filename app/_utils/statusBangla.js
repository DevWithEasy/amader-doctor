export default function statusBangla(status) {
    switch (status) {
        case 'Pending':
            return 'অপেক্ষমাণ রয়েছে'
        case 'Confirmed':
            return 'গ্রহন করা হয়েছে'
        case 'Completed':
            return 'সম্পন্ন হয়ে গেছে'
        case 'Rejected':
            return 'বাতিল করা হয়েছে'
        default:
            return 'আপনি স্ট্যাটাস প্রবেশ করাননি'
    }
}