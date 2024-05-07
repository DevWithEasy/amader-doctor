import dayNameBangla from '@/app/_utils/dayNameBangla'
import formatTime from '@/app/_utils/formatTime'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

export default function AppoinmentChamberAlert({ chamber, view, setView }) {
    const cancelRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            setView(false)
        }, 2000);
    })
    return (
        <>
            <AlertDialog
                isOpen={view}
                leastDestructiveRef={cancelRef}
                onClose={() => setView(false)}
                isCentered
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogBody>
                            <div
                                className='py-2'
                            >
                                <p
                                    className='text-xl text-blue-500'
                                >
                                    {chamber.vanue.name}
                                </p>
                                <p>
                                    ঠিকানাঃ {chamber.vanue.location}
                                </p>
                                <p>
                                    প্রতি {dayNameBangla(chamber.day)}, {formatTime(chamber.from)} হতে {formatTime(chamber.to)}
                                </p>
                            </div>
                        </AlertDialogBody>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}