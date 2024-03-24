'use client'
import useUserStore from '@/app/_store/userStore';
import { MenuGroup, MenuItem } from "@chakra-ui/react";

export default function HeaderMenu_IsUser() {
    const { isAuth } = useUserStore()
    return (
        <>
            {!isAuth &&
                <MenuGroup title="আমার তথ্য ">
                    <MenuItem onClick={() => navigate("/signin")}>প্রবেশ করুন</MenuItem>
                    <MenuItem onClick={() => navigate("/signup")}>নতুন একাউন্ট করুন</MenuItem>
                </MenuGroup>
            }
        </>
    )
}
