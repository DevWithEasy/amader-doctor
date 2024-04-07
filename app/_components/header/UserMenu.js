'use client'
import useServiceStore from "@/app/_store/serviceStore";
import useUserStore from "@/app/_store/userStore";
import api_url from "@/app/_utils/apiurl";
import { Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import Image from 'next/image'
import Link from 'next/link'

const UserMenu = () => {
  const {  user,removeUser } = useUserStore()
  const {removeData} = useServiceStore()
  const handleLogout=()=>{
    removeUser()
    removeData()
  }
  return (
    <Menu>
      <MenuButton>
        <Image
          src={user?.image?.url ? `${api_url}/${user?.image?.url}` : '/image/user.png'}
          alt="user_image"
          height={30}
          width={30}
          className="rounded-full"
        />
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
                href="/doctors/appointments"
              >
                অ্যাপয়েন্টমেন্ট সমুহ
              </Link>
            </MenuItem>
          }
          <MenuItem
            className="text-black"
          >
            <Link
              href="/appointments"
            >
              আপনার অ্যাপয়েন্টমেন্ট সমুহ
            </Link>

          </MenuItem>
          <MenuItem>
            <Link
              href="/payment/add"
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