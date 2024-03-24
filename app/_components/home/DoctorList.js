import Doctor from "./Doctor";


export default function DoctorList({ doctors }) {
    return (
        <div
            className="md:w-10/12 md:mx-auto mx-4 space-y-3"
        >
            <h2
                className="text-xl font-semibold"
            >
                জনপ্রিয় ডাক্তারগণঃ
            </h2>
            <div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
                {
                    doctors.map(doctor =>
                        <Doctor key={doctor._id} {...{ doctor }} />
                    )
                }
            </div>
        </div>
    )
}
