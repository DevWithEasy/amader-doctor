export const errorToast=({toast,title,description})=>{
    toast({
        title: title ? title : '',
        description: description,
        status: 'error',
        duration: 2000,
        isClosable: true,
    })
}