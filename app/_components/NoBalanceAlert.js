import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import useUserStore from '../_store/userStore';

const NoBalanceAlert = ({view,setView}) => {
    const {user} = useUserStore()
    const cancelRef = React.useRef()
    const router = useRouter()
    return (
        <>

            <AlertDialog
                isOpen={view}
                leastDestructiveRef={cancelRef}
                onClose={()=>setView(false)}
                isCentered
            >
                <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        ব্যালান্স শেষ !
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        আন্তরিকভাবে দুঃখিত,আপনার একাউন্টে পর্যাপ্ত পরিমান টাকা নেই।
                        <br/>
                        অ্যাপয়েন্টমেন্ট করার পুর্বে টাকা যোগ করে নিন।
                    </AlertDialogBody>

                    <AlertDialogFooter>
                    <Button ref={cancelRef} onClose={()=>setView(false)}>
                        বাতিল
                    </Button>
                    <Button colorScheme='blue' onClick={()=>router.push(`/user/${user._id}/transections/add`)} ml={3}>
                        টাকা যোগ করুন
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default NoBalanceAlert;