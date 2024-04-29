import dayNameBangla from "@/app/_utils/dayNameBangla";
import formatTime from "@/app/_utils/formatTime";
import { toBengaliNumber } from "bengali-number";

export default function AppoinmentChamberList({ chambers }) {
  return (
    <div className="p-2 space-y-3">
      <p className="font-semibold">চেম্বার সমূহঃ</p>
      <div
        className="space-y-2"
      >
        {
          chambers.map(chamber=>
          <div
            key={chamber._id}
            className='p-2 border'
          >
            <p className="text-blue-500">স্থানঃ {chamber.vanue.name}</p>
            <p>ঠিকানাঃ {chamber.vanue.location}</p>
            <p>সবোর্চ্চ অ্যাপয়েন্টমেন্টঃ {toBengaliNumber(chamber.limit)}</p>
            <p>প্রতি {dayNameBangla(chamber.day)}, {formatTime(chamber.from)} হতে {formatTime(chamber.to)}</p>
          </div>
          )
        }
      </div>
      {/* <table className="hidden md:block w-full text-left text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-blue-500 uppercase bg-blue-50">
          <tr>
            <td className="px-6 py-3">
              চেম্বারের স্থান
            </td>
            <td className="px-6 py-3">
              ঠিকানা
            </td>
            <td className="px-6 py-3 text-center">
              সর্বোচ্চ
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
              <td className="px-6 py-4 text-nowrap">{chamber.vanue.name}</td>
              <td className="px-6 py-4 text-nowrap">{chamber.vanue.location}</td>
              <td className="px-6 py-4 text-center">{chamber.limit}</td>
              <td className="px-6 py-4">{dayNameBangla(chamber.day)}</td>
              <td className="px-6 py-4">{chamber.from}</td>
              <td className="px-6 py-4">{chamber.to}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}
