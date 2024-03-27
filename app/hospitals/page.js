import api_url from "../_utils/apiurl";
import Hospital from "../_components/hospital/Hospital";

async function getData() {
    const randomParam = Math.random().toString(36).substring(7);
    const res = await fetch(`${api_url}/api/vanue/all?${randomParam}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}
export default async function Hospitals() {
    const { data }  = await getData()

    return (
        <div className="mx-2 mt-3 md:w-10/12 md:mx-auto">
            <div
                className="grid md:grid-cols-3 md:gap-4 space-y-3 md:space-y-0"
            >
                {
                    data.map((hospital) => <Hospital
                            key={hospital._id}
                            {...{ hospital }}
                        />
                        )
                }
            </div>
        </div>
    )
}