'use client'
import api_url from '@/app/_utils/apiurl'
import handleChange from '@/app/_utils/handleChange'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Input from '@/app/_components/Input'

export default function Doctor() {
  const [value, setValue] = useState()
  const [specialists, setSpecialists] = useState([])
  const { id } = useParams()

  async function updateDoctorInfo() {
    try {
      const res = await axios.put(`${api_url}/api/doctor/update/${value._id}?q=info`, { ...value }, {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      })
      if (res.data.status === 200) {
        setValue(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function getDoctor() {
      try {
        const res = await axios.get(`${api_url}/api/doctor/find/${id}`, {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('accessToken')
          }
        })
        if (res.data.success) {
          setValue(res.data.data.doctor)
          setSpecialists(res.data.data.specialists)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getDoctor()
  }, [])
  
  return (
    <div
      className=''
    >
      <div className="md:w-8/12 space-y-3">
          <Input
            label="নাম "
            type="text"
            name="name"
            c_value={value?.name}
            value={value}
            setValue={setValue}
          />
          <Input
            label="মোবাইল নম্বর "
            type="text"
            name="phone"
            c_value={value?.phone}
            value={value}
            setValue={setValue}
          />
          <Input
            label="ই-মেইল "
            type="email"
            name="email"
            c_value={value?.email}
            value={value}
            setValue={setValue}
          />
          <Input
            label="ওয়েবসাইট "
            type="text"
            name="website"
            c_value={value?.website}
            value={value}
            setValue={setValue}
          />
          <Input
            label="কর্মরত আছেন (প্রতিষ্ঠানের নাম)"
            type="text"
            name="workedAt"
            c_value={value?.workedAt}
            value={value}
            setValue={setValue}
          />
          <Input
            label="পদবী "
            type="text"
            name="designation"
            c_value={value?.designation}
            value={value}
            setValue={setValue}
          />
          <Input
            label="শিক্ষাগত যোগ্যতা (সকল ডিগ্রী)"
            type="text"
            name="education"
            c_value={value?.education}
            value={value}
            setValue={setValue}
          />
          <div>
            <label className="block">অভিজ্ঞতার বিষয়: </label>
            <select
              name="specialization"
              value={value?.specialization}
              onChange={(e) => handleChange(e, value, setValue)}
              className="w-full p-2 border rounded focus:outline-blue-500"
            >
              <option>বাছাই করুন</option>
              {specialists.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <Input
            label="মোট অভিজ্ঞতার বয়স"
            type="text"
            name="experience"
            c_value={value?.experience}
            value={value}
            setValue={setValue}
          />
          <Input
            label="অভিজ্ঞতার ক্ষেত্রসমূহ "
            type="text"
            name="experienceArea"
            c_value={value?.experienceArea}
            value={value}
            setValue={setValue}
          />
          <Input
            label="সার্ভিস চার্জ "
            type="text"
            name="feesPerConsultation"
            c_value={value?.feesPerConsultation}
            value={value}
            setValue={setValue}
          />
          <button
            onClick={updateDoctorInfo}
            className='px-4 py-2 bg-blue-500 text-white rounded'
          >
            সংরক্ষন করুন
          </button>
        </div>
    </div>
  )
}
