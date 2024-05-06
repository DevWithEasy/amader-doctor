import dayNameBangla from "@/app/_utils/dayNameBangla";

const SelectDay = ({ setDay,width }) => {
    const daysOfWeek = [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
    ]
    return (
        <select
            onChange={(e) => setDay(e.target.value)}
            className={`px-2 py-1 ${width && 'w-full'} border focus:outline-blue-500 rounded`}
        >
            <option>বার বাছাই করুন</option>
            {daysOfWeek &&
                daysOfWeek
                    .map((day) => day)
                    .map((day, i) => (
                        <option key={i} value={day}>
                            {dayNameBangla(day)}
                        </option>
                    ))}
        </select>
    );
};

export default SelectDay;