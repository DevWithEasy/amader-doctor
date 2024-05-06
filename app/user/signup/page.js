'use client'
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { useToast } from '@chakra-ui/react'
import { handleSignUp } from "@/app/_utils/users_utils";
import handleChange from "@/app/_utils/handleChange";
import Input from "@/app/_components/Input";
import passwordView from "@/app/_utils/passwordView";

export default function Signup() {
  const toast = useToast()
  const router = useRouter()
  const [type, setType] = useState("password")
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  return (
    <div className="mt-3 mb-16 w-11/12 md:w-5/12 mx-auto px-4 py-2 border rounded space-y-2 bg-white/50">
      <h1 className="text-2xl font-bold text-center uppercase border-b py-2">
        নতুন একাউন্ট তৈরি করুন
      </h1>
      <p className="text-gray-500 pb-5">
        একাউন্ট করুন খুব সহজেই। সঠিক তথ্য প্রদান করে আপনার একাউন্ট টি ভেরিফাই
        করুন। আপনার তথ্য আমরা কারো সাথে শেয়ার করিনা।
      </p>
      <div
        className="space-y-2"
      >
        <Input
          label="নাম "
          type="text"
          name="name"
          c_value={value.name}
          value={value}
          setValue={setValue}
        />
        <Input
          label="ই-মেইল"
          type="email"
          name="email"
          c_value={value.email}
          value={value}
          setValue={setValue}
        />
        <Input
          label="মোবাইল নাম্বার লিখুন : (১১ ডিজিট) "
          type="phone"
          name="phone"
          c_value={value.phone}
          value={value}
          setValue={setValue}
        />
        <div className="relative space-y-1">
          <label>পাসওয়ার্ড : </label>
          <input
            type={type}
            name="password"
            onChange={(e) => handleChange(e, value, setValue)}
            className="w-full p-2 rounded border focus:outline-blue-500"
          />
          <button
            onClick={() => passwordView(type, setType)}
            className="absolute right-2 bottom-2 text-gray-600"
          >
            {type === "password" ? <BsEyeSlash size={25} /> : <BsEye size={25} />}
          </button>
        </div>
      </div>
      <button
        onClick={() => handleSignUp(value, router, toast)}
        className="w-full p-2 bg-blue-400 text-white rounded hover:bg-blue-500 hover:transition-all hover:duration-300"
      >
        একাউন্ট খুলুন
      </button>

      <div className="p-2 text-center">
        ইতিপূর্বে একাউন্ট করা হয়েছে ?{" "}
        <Link
          href="/user/signin"
          className="text-blue-500"
        >
          প্রবেশ করুন
        </Link>
      </div>
    </div>
  );
}
