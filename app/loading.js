import Image from 'next/image'

const Loading = () => {
    return (
        <div
            className='fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-white z-50'
        >
            <Image
                src='/image/loading.gif'
                width={150}
                height={150}
                alt='loading'
            />
        </div>
    );
};

export default Loading;