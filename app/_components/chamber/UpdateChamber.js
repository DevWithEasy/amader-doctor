import api_url from '@/app/_utils/apiurl';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import useUserStore from "../../_store/userStore";
import handleChange from "../../_utils/handleChange";
import Input from "../Input";
import useServiceStore from '@/app/_store/serviceStore';

export default function UpdateChamber({ chamber, updateView, setUpdateView }) {
  const { addChambers } = useServiceStore();
  const [value, setValue] = useState(chamber);
  async function updateChamber() {
    try {
      const res = await axios.put(`${api_url}/api/chamber/${value._id}`, value, {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      })
      if (res.data.status === 200) {
        addChambers(res.data.data)
        setUpdateView(false)
        console.log(res.data.data)
      }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
      <Modal isOpen={updateView}>
        <ModalOverlay />
        <ModalContent>
          <div
            className="px-6 pt-3 flex justify-between items-center font-semibold"
          >
            <p>চেম্বার আপডেট</p>
            <button onClick={() => setUpdateView(false)}>X</button>
          </div>
          <ModalBody>
            <div className="p-2 space-y-2 font-bangla">
              <Input
                label="হাসপাতাল / ক্লিনিক /ডায়ানগস্টিক নাম "
                type="text"
                // name="vanue"
                c_value={value?.vanue?.name}
                value={value}
                setValue={setValue}
              />

              <Input
                label="ঠিকানা"
                type="text"
                // name="location"
                c_value={value?.vanue?.location}
                value={value}
                setValue={setValue}
                disabled
              />

              <Input
                label="সর্বোচ্চ অ্যাপয়েন্টমেন্ট"
                type="number"
                name="limit"
                c_value={value?.limit}
                value={value}
                setValue={setValue}
              />

              <div className="space-y-2">
                <div className="w-full space-y-1">
                  <label className="block">দিন ও সময় : </label>
                  <select
                    name="day"
                    value={value?.day}
                    onChange={(e) => handleChange(e, value, setValue)}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2"
                  >
                    <option value="">দিন বাছাই করুন</option>
                    <option value="Saturday">শনিবার</option>
                    <option value="Sunday">রবিবার</option>
                    <option value="Monday">সোমবার</option>
                    <option value="Tuesday">মঙ্গলবার</option>
                    <option value="WednesDay">বুধবার</option>
                    <option value="Thusday">বৃহস্পতিবার</option>
                    <option value="Friday">শুক্রবার</option>
                  </select>
                </div>
                <div className="w-full flex items-center space-x-2">
                  <Input
                    label="শুরুর সময় "
                    type="time"
                    name="from"
                    c_value={value?.from}
                    value={value}
                    setValue={setValue}
                  />
                  <Input
                    label="শেষ সময়"
                    type="time"
                    name="to"
                    c_value={value?.to}
                    value={value}
                    setValue={setValue}
                  />
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter className="space-x-2 font-bangla">
            <button
              onClick={() => setUpdateView(!updateView)}
              className="py-2 px-6 bg-gray-500 text-white rounded-md"
            >
              বাতিল
            </button>
            <button
              onClick={updateChamber}
              className="py-2 px-6 bg-blue-500 text-white rounded-md"
            >
              সাবমিট
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
