const getVanueTypeBangla = (type) => {
    switch (type) {
        case 'hospital':
            return 'হাসপাতাল'
        case 'diagnostic':
            return 'ডায়নোগষ্টিক সেন্টার'
        case 'clinic':
            return 'ক্লিনিক'
        case 'p_chamber' : 
            return 'নিজস্ব চেম্বার'
        default:
            return 'আপনি কোন টাইপ দেননি !'
    }
}

export default getVanueTypeBangla;