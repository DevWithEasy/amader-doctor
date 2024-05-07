export function selectedDay(e,addChamber, chambers, setChamber,setAlertView, toast) {
    if (new Date(e.target.value).getTime() < Date.now()) {
        return toast({
            title: 'সঠিক তারিখ নির্বাচনে ব্যর্থ',
            description: "আপনি আজকের থেকে পরবর্তী তারিখ বাছাই করুন",
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
    }
    const date = new Date(e.target.value)

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const dayName = daysOfWeek[date.getDay()]

    const days = chambers?.map(chamber => chamber.day)

    const day = days?.find(day => day === dayName)

    const chamber = chambers?.find(chamber => chamber.day === day)

    if (day === undefined) {
        addChamber('')
        setChamber({})
        return toast({
            title: 'সঠিক তারিখ নির্বাচনে ব্যর্থ !',
            description: "চেম্বার লিস্টে যে বার গুলো দেওয়া আছে,সেই বার অনুযায়ী তারিখ বাছাই করে আপনার অ্যাপয়েন্টম্যান্ট নিশ্চিত করুন",
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
    } else {
        addChamber(chamber._id)
        setChamber({ ...chamber, date: date.toLocaleDateString() })
        setAlertView(true)
    }
}