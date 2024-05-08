export const errorToast=({toast,title,description})=>{
    toast({
        title: title ? title : '',
        description: description,
        status: 'error',
        duration: 2000,
        isClosable: true,
    })
}

export const successToast = ({toast,title,description}) =>{
    toast({
        title: title ? title : '',
        description: description,
        status: 'success',
        duration: 2000,
        isClosable: true,
    })
}