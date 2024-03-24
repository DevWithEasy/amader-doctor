import dayNameBangla from "@/app/_utils/dayNameBangla";

export default function AppoinmentChamberList({ chambers }) {
  return (
    <div className="overflow-x-auto z-0 bg-white p-2 rounded-md">
      <div
        className="md:hidden"
      >
        {
          chambers.map(chamber=>
          <div
            key={chamber._id}
            className='p-2 border-b'
          >
            <p>স্থানঃ {chamber.vanue}</p>
            <p>ঠিকানাঃ {chamber.location}</p>
            <p>সবোর্চ্চ অ্যাপয়েন্টমেন্টঃ {chamber.appointment_limit}</p>
            <p>প্রতি {dayNameBangla(chamber.day)}, {chamber.from} হতে {chamber.to}</p>
          </div>
          )
        }
      </div>
      <table className="hidden md:block w-full text-left text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-blue-500 uppercase bg-blue-50">
          <tr>
            <td className="px-6 py-3">
              চেম্বারের স্থান
            </td>
            <td className="px-6 py-3">
              ঠিকানা
            </td>
            <td className="px-6 py-3 text-center">
              সর্বোচ্চ অ্যাপয়েন্টমেন্ট
            </td>
            <td className="px-6 py-3 text-center">
              বার
            </td>
            <td className="px-6 py-3 text-center">
              শুরু
            </td>
            <td className="px-6 py-3 text-center">
              শেষ
            </td>
          </tr>
        </thead>
        <tbody>
          {chambers.map((chamber, i) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{chamber.vanue}</td>
              <td className="px-6 py-4">{chamber.location}</td>
              <td className="px-6 py-4">{chamber.appointment_limit}</td>
              <td className="px-6 py-4">{dayNameBangla(chamber.day)}</td>
              <td className="px-6 py-4">{chamber.from}</td>
              <td className="px-6 py-4">{chamber.to}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
