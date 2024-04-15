import useUserStore from "@/app/_store/userStore";
import api_url from '@/app/_utils/apiurl';
import handleChange from "@/app/_utils/handleChange";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import axios from "axios";
import Input from "../Input";

export default function AddChamber({ id, value, setValue, view, setView, name, location, handleView }) {
  const { onClose } = useDisclosure()
  const { reload } = useUserStore()

  async function addChamber() {
    try {
      const res = await axios.post(`${api_url}/api/doctor/add_chamber/${id}`, value, {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      })

      if (res.data.status === 200) {
        reload()
        setView(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Modal isOpen={view}
        className='font-bangla'
      >
        <ModalOverlay />
        <ModalContent>
          <div
            className="px-6 py-2 flex justify-between items-center font-semibold"
          >
            <p>ননতুন চেম্বার যোগ করুন</p>
            <button
              className="px-4 py-2"
              onClick={() => setView(!view)}>
              X
            </button>
          </div>
          <ModalBody
            className='font-bangla'
          >
            <div className="p-2 space-y-2">
              <button
                onClick={() => handleView('vanue')}
                className='w-full p-2 bg-gray-50 border rounded focus:outline-none focus:ring-2'
              >
                চেম্বারের স্থান খুঁজুন ও সিলেক্ট করুন
              </button>
              <div className=" space-y-1">
                <label>হাসপাতাল / ক্লিনিক /ডায়ানগস্টিক নাম : </label>
                <input
                  type='text'
                  onFocus={() => handleView('vanue')}
                  value={name}
                  onChange={()=>{}}
                  className='w-full p-2 border rounded focus:outline-blue-500'
                />
              </div>
              <Input
                label="ঠিকানা"
                type="text"
                // name="location"
                c_value={location}
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
                    c_value={value?.day}
                    onChange={(e) => handleChange(e, value, setValue)}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2"
                  >
                    <option value="">দিন বাছাই করুন</option>
                    <option value="Saturday">শনিবার</option>
                    <option value="Sunday">রবিবার</option>
                    <option value="Monday">সোমবার</option>
                    <option value="Tuesday">মঙ্গলবার</option>
                    <option value="Wednesday">বুধবার</option>
                    <option value="Thursday">বৃহস্পতিবার</option>
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
              <div
                className="pt-2 flex justify-end space-x-2"
              >
                <button
                  onClick={() => setView(!view)}
                  className="py-2 px-6 bg-gray-500 text-white rounded-md"
                >
                  বন্ধ করুন
                </button>
                <button
                  onClick={addChamber}
                  className="py-2 px-6 bg-blue-500 text-white rounded-md"
                >
                  সাবমিট দিন
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
