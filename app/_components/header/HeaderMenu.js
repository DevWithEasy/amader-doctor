import { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link'
import HeaderMenu_IsUser from "./HeaderMenu_IsUser";

const HeaderMenu = () => {
    return (
        <Menu>
            <MenuButton>
                <AiOutlineMenu size={25} className="md:hidden text-white" />
            </MenuButton>
            <MenuList className="text-black px-2">
                <MenuGroup title="সেবা">
                    <MenuItem>
                        <Link
                            href="/doctors"
                        >
                            সকল ডাক্তারগণ
                        </Link>
                    </MenuItem>
                    <MenuItem
                        className="text-black"
                    >
                        <Link
                            href="/hospitals"
                        >
                            সকল হাস্পাতাল / ক্লিনিক
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="/amblulances"
                        >
                            এম্বুল্যান্স ভাড়া
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="/blood-bank"
                        >
                            রক্ত ব্যাংক
                        </Link>
                    </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <HeaderMenu_IsUser />

                <MenuGroup title="সাহায্য">
                    <MenuItem>আমাদের সম্পর্কে</MenuItem>
                    <MenuItem>আপনার জিজ্ঞাসা</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    );
};

export default HeaderMenu;