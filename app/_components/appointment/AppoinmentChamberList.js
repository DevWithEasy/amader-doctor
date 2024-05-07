'use client'
import useServiceStore from "@/app/_store/serviceStore";
import dayNameBangla from "@/app/_utils/dayNameBangla";
import formatTime from "@/app/_utils/formatTime";
import { toBengaliNumber } from "bengali-number";

export default function AppoinmentChamberList({ chambers }) {
  const {chamberId} = useServiceStore()
  console.log(chamberId)
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
            className={`p-2 border ${chamber._id === chamberId && 'bg-gray-50'}`}
          >
            <p className="text-blue-500">স্থানঃ {chamber.vanue.name}</p>
            <p>ঠিকানাঃ {chamber.vanue.location}</p>
            <p>সবোর্চ্চ অ্যাপয়েন্টমেন্টঃ {toBengaliNumber(chamber.limit)}</p>
            <p>প্রতি {dayNameBangla(chamber.day)}, {formatTime(chamber.from)} হতে {formatTime(chamber.to)}</p>
          </div>
          )
        }
      </div>
    </div>
  );
}
