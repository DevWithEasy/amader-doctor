import { toBengaliNumber } from "bengali-number";
import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import dayNameBangla from "../../_utils/dayNameBangla";
import formatTime from "../../_utils/formatTime";
import DeleteChamber from "./DeleteChamber";
import UpdateChamber from "./UpdateChamber";
export default function ChamberList({ chambers }) {
  const [updateView, setUpdateView] = useState(false)
  const [deleteView, setDeleteView] = useState(false)
  const [s_Chamber, setS_Chamber] = useState(null)
  
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-gray-500 dark:text-gray-400">
        <thead className="text-white bg-gray-500">
          <tr>
            <td  className="px-4 py-2">
              নং
            </td>
            <td  className="p-2">
              চেম্বারের স্থান
            </td>
            <td  className="p-2">
              ঠিকানা
            </td>
            <td  className="p-2 text-center">
              সর্বোচ্চ অ্যাপয়েন্টমেন্ট
            </td>
            <td  className="p-2 text-center">
              বার
            </td>
            <td  className="p-2 text-center">
              শুরু
            </td>
            <td  className="p-2 text-center">
              শেষ
            </td>
            <td  className="p-2 text-center">
              পদক্ষেপ
            </td>
          </tr>
        </thead>
        <tbody>
          {chambers &&
            chambers.map((chamber, i) => (
              <tr
                key={chamber._id}
                className="bg-white border-b"
              >
                <td className="px-4 py-2">{toBengaliNumber(i + 1)}</td>
                <td className="p-2">{chamber?.vanue?.name}</td>
                <td className="p-2">{chamber?.vanue?.location}</td>
                <td className="p-2 text-center">{toBengaliNumber(chamber.limit)}</td>
                <td className="p-2 text-center">{dayNameBangla(chamber.day)}</td>
                <td className="p-2 text-center">{formatTime(chamber.from)}</td>
                <td className="p-2 text-center">{formatTime(chamber.to)}</td>
                <td className="p-2 flex justify-center items-center text-center space-x-2">
                  <AiFillEdit
                    onClick={() => {
                      setS_Chamber(chamber)
                      setUpdateView(!updateView)
                    }}
                    className="cursor-pointer text-blue-500"
                  />
                  <AiFillDelete
                    onClick={() => {
                      setS_Chamber(chamber)
                      setDeleteView(!deleteView)
                    }}
                    className="cursor-pointer text-red-500"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {updateView &&
        <UpdateChamber {...{
          s_Chamber,
          updateView, setUpdateView
        }} />
      }
      {deleteView &&
        <DeleteChamber {...{
          s_Chamber,
          deleteView, setDeleteView
        }} />
      }
    </div>
  );
}
