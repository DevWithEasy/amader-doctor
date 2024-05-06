'use client'
import useServiceStore from "@/app/_store/serviceStore";
import useUserStore from "@/app/_store/userStore";
import api_url from "@/app/_utils/apiurl";
import socket from "@/app/_utils/socket";
import { Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const UserMenu = () => {
  const { user, removeUser, notifications } = useUserStore()
  const router = useRouter()
  const { removeData } = useServiceStore()
  const handleLogout = () => {
    removeUser()
    removeData()
    router.push('/')
  }

  useEffect(()=>{
    socket.emit('join', {id : user._id})
  },[])
  return (
    <Menu>
      <MenuButton>
        <div
          className="relative w-[30px] h-[30px]"
        >
          <Image
            src={user?.image?.url ? `${api_url}/${user?.image?.url}` : '/image/user.png'}
            alt="user_image"
            height={30}
            width={30}
            className="rounded-full"
          />
          {
            notifications?.length > 0 &&
            <div
              className="absolute flex justify-center items-center h-5 w-5 bg-white text-red-500 rounded-full text-xs text-nowrap -right-3 -bottom-3"
            >
              <span>
                {
                  notifications.filter(
                    (notification) => notification.status === false
                  ).length
                }
              </span>
            </div>
          }

        </div>

      </MenuButton>
      <MenuList className="text-black px-2">
        <MenuGroup title="প্রোফাইল">
          <MenuItem>
            <Link
              href={`/user/${user?._id}`}
            >
              আমার প্রোফাইল
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href={`/user/${user._id}/notifications`}
              className="w-full flex justify-between"
            >
              <span>অপঠিত বার্তা</span>
              {notifications?.length > 0 &&
                <span
                  className="text-red-500"
                >
                  {
                    notifications.filter(
                      (notification) => notification.status === false
                    ).length
                  }
                </span>
              }

            </Link>
          </MenuItem>
          {user?.isAdmin && (
            <MenuItem
              className="text-black"
            >
              <Link
                href="/admin"
              >
                এডমিন ড্যাশবোর্ড
              </Link>
            </MenuItem>
          )}
          {user?.isDoctor ? (
            <MenuItem
              className="text-black"
            >
              <Link
                href={`/user/doctor/${user?._id}`}
              >
                ডাক্তার ড্যাশবোর্ড
              </Link>
            </MenuItem>
          ) : (
            <MenuItem
              className="text-black"
            >
              <Link
                href="/doctors/apply_new_doctor"
              >
                ডাক্তার প্রোফাইলের আবেদন
              </Link>
            </MenuItem>
          )}
          {user?.isDoctor &&
            <MenuItem
              className="text-black"
            >
              <Link
                href={`/user/doctor/${user._id}/appointments`}
              >
                অ্যাপয়েন্টমেন্ট সমুহ
              </Link>
            </MenuItem>
          }
          <MenuItem
            className="text-black"
          >
            <Link
              href={`/user/${user._id}/appointments`}
            >
              আপনার অ্যাপয়েন্টমেন্ট সমুহ
            </Link>

          </MenuItem>
          <MenuItem>
            <Link
              href={`/user/${user._id}/transections/add`}
            >
              ব্যালেন্স যোগ করুন
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/payments"
            >
              পেমেন্টস সমুহ
            </Link>
          </MenuItem>
          <MenuItem
            onClick={() => handleLogout()}
            className="hover:bg-red-500 hover:text-white"
          >
            বাহির হন
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>

  );
};

export default UserMenu;