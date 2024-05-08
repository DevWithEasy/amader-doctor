'use client'
import Upload from "@/app/_components/Upload";
import useUserStore from "@/app/_store/userStore";
import api_url from "@/app/_utils/apiurl";
import handleChange from "@/app/_utils/handleChange";
import { updateUser } from "@/app/_utils/users_utils";
import { useToast } from "@chakra-ui/react";
import Image from 'next/image';
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Profile() {
  const toast = useToast()
  const { user, addUser } = useUserStore()
  const { id } = useParams()
  const [c_user, setUser] = useState(user)
  return (
    <div className="space-y-5">
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
      <div className="md:w-8/12 space-y-5">
        <div>
          <label>নামঃ</label>
          <input
            type="text"
            name="name"
            value={c_user?.name}
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
            readOnly
          />
        </div>

        <button
          onClick={() =>
            updateUser({
              id,
              value: c_user,
              setUser,
              addUser,
              toast
            })
          }
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          সংরক্ষন করুন
        </button>
      </div>
    </div>
  );
}
