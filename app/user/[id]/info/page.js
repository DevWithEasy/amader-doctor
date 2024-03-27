'use client'
import useUserStore from '@/app/_store/userStore'
import dateGenerator from '@/app/_utils/dateGenerator'
import handleChange from '@/app/_utils/handleChange'
import React, { useState } from 'react'

export default function PersonalInfo() {
    const { user } = useUserStore()
    const [c_user, setUser] = useState(user)
    const [address, setAddress] = useState(user?.address)
    return (
        <div
            className='grid grid-cols-2 gap-4'
        >
            <div>
                <label>লিঙ্গঃ</label>
                <select
                    name="gender"
                    value={c_user?.gender}
                    onChange={(e) => handleChange(e, c_user, setUser)}
                    className="w-full px-2 py-[6.5px] border-b focus:outline-none focus:border-blue-300"
                >
                    <option value="Male">পুরুষ</option>
                    <option value="Female">মহিলা</option>
                    <option value="Others">অন্যান্য</option>
                </select>
            </div>
            <div className="relative">
                <label>জন্ম তারিখঃ </label>
                <input
                    type="date"
                    name="dob"
                    onChange={(e) => handleChange(e, c_user, setUser)}
                    value={dateGenerator(c_user?.dob)}
                    className="w-full p-2 py-[7px] border-b focus:outline-none focus:border-blue-300"
                />
            </div>
            <div>
                <label>রক্তদানে ইচ্ছুকঃ </label>
                <select
                    name="donar"
                    value={c_user?.donar}
                    onChange={(e) => handleChange(e, c_user, setUser)}
                    className="w-full px-2 py-[6.5px] border-b focus:outline-none focus:border-blue-300"
                >
                    <option value="">বাছাই করুন </option>
                    <option value="no">না </option>
                    <option value="yes">হ্যাঁ </option>
                </select>
            </div>
            <div>
                <label>রক্তের গ্রুপঃ </label>
                <select
                    name="bloodGroup"
                    value={c_user?.bloodGroup}
                    onChange={(e) => handleChange(e, c_user, setUser)}
                    className="w-full px-2 py-[6.5px] border-b focus:outline-none focus:border-blue-300"
                >
                    <option value="">বাছাই করুন </option>
                    <option value="A+">A+ </option>
                    <option value="A-">A- </option>
                    <option value="B">B+ </option>
                    <option value="B-">B- </option>
                    <option value="AB+">AB+ </option>
                    <option value="AB-">AB- </option>
                    <option value="O+">O+ </option>
                    <option value="O-">O- </option>
                </select>
            </div>
            <div className="relative">
                <label>রক্তদানের তারিখঃ </label>
                <input
                    type="date"
                    name="donateDate"
                    onChange={(e) => handleChange(e, c_user, setUser)}
                    value={dateGenerator(c_user?.donateDate)}
                    className="w-full p-2 py-[7px] border-b focus:outline-none focus:border-blue-300"
                />
            </div>
            <div>
                <label>গ্রাম/রাস্তা নংঃ </label>
                <input
                    type="text"
                    name="location"
                    value={address?.location}
                    onChange={(e) => handleChange(e, address, setAddress)}
                    className="w-full p-2 border-b focus:outline-none focus:border-blue-300"
                    placeholder="গ্রাম/রাস্তা"
                />
            </div>
            <div>
                <label>পোস্ট অফিসঃ </label>
                <input
                    type="text"
                    name="post_office"
                    value={address?.post_office}
                    onChange={(e) => handleChange(e, address, setAddress)}
                    className="w-full p-2 border-b focus:outline-none focus:border-blue-300"
                    placeholder="পোস্ট অফিস"
                />
            </div>
            <div>
                <label>পোস্ট কোডঃ</label>
                <input
                    type="text"
                    name="post_code"
                    value={address?.post_code}
                    onChange={(e) => handleChange(e, address, setAddress)}
                    className="w-full p-2 border-b focus:outline-none focus:border-blue-300"
                    placeholder="পোস্ট কোড"
                />
            </div>
            <div>
                <label>উপজেলাঃ</label>
                <input
                    type="text"
                    name="upazilla"
                    value={address?.upazilla}
                    onChange={(e) => handleChange(e, address, setAddress)}
                    className="w-full p-2 border-b focus:outline-none focus:border-blue-300"
                    placeholder="উপজেলা"
                />
            </div>
            <div>
                <label>জেলাঃ</label>
                <input
                    type="text"
                    name="district"
                    value={address?.district}
                    onChange={(e) => handleChange(e, address, setAddress)}
                    className="w-full p-2 border-b focus:outline-none focus:border-blue-300"
                    placeholder="জেলা"
                />
            </div>
        </div>
    )
}
