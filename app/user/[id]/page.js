'use client'
import { toBengaliNumber } from "bengali-number";
import moment from "moment";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import Image from 'next/image'
import Upload from "@/app/_components/Upload";
import useUserStore from "@/app/_store/userStore";
import handleChange from "@/app/_utils/handleChange";
import dateGenerator from "@/app/_utils/dateGenerator";
import { getUser, updateUser } from "@/app/_utils/users_utils";
import api_url from "@/app/_utils/apiurl";

export default function Profile() {
  const { random, addUser } = useUserStore()
  const { id } = useParams()
  const [user, setUser] = useState({})
  const [address, setAddress] = useState({})

  useEffect(() => {
    getUser(id, setUser, setAddress)
  }, [id, random])
  // console.log(user)
  return (
    <div className="p-4 space-y-5">
      <div
        className="flex items-end"
      >
        <Image
          src={`${api_url}/${user?.image?.url}`}
          alt="user"
          height={100}
          width={100}
          className="h-[100px] rounded-full"
        />
        <Upload />
      </div>
      <div className="md:w-8/12">
        <div>
          <label>নামঃ</label>
          <input
            type="text"
            name="name"
            value={user?.name}
            onChange={(e) => handleChange(e, user, setUser)}
            className="w-full p-2 border focus:outline-blue-500 rounded-md"
            placeholder="নাম"
          />
        </div>
        <div>
          <label>ই-মেইলঃ</label>
          <input
            type="email"
            name="email"
            value={user?.email}
            onChange={(e) => handleChange(e, user, setUser)}
            className="w-full p-2 border focus:outline-blue-500 rounded-md"
            placeholder="ই-মেইল"
            readOnly
          />
        </div>
        <div>
          <label>মোবাইল নাম্বারঃ</label>
          <input
            type="text"
            name="phone"
            value={user?.phone}
            onChange={(e) => handleChange(e, user, setUser)}
            className="w-full p-2 border focus:outline-blue-500 rounded-md"
            placeholder="মোবাইল নাম্বার"
          />
        </div>

        <div className="flex justify-center items-center pt-4">
          <button
            onClick={() =>
              updateUser(id, user, address, setUser, addUser, toast)
            }
            className="px-6 py-1 bg-green-400 text-white rounded-full hover:bg-green-500"
          >
            সংরক্ষন করুন
          </button>
        </div>
      </div>
    </div>
  );
}
