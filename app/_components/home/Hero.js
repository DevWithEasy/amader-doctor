import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <div
            className='pt-5 flex flex-col-reverse md:flex-row justify-between items-center'
        >
            <div
                className='md:w-4/12 p-4 md:p-0 space-y-2 border rounded md:border-none'
            >
                <h1 className="text-3xl font-semibold">
                    খুঁজুন এবং <span className='text-blue-500'>অ্যাপয়েন্টমেন্ট</span> নিন আপনার পছন্দের <span className='text-blue-500'>ডাক্তারের</span>
                </h1>
                <p className="text-gray-600">ঠাকুরগাঁও জেলার সকল উপজেলার ডাক্তার,হাসপাতাল, রক্ত এবং এম্বুলেন্স খুঁজুন খুব সহজেই। আরো সহজ করতে আমাদের নিজস্ব ম্যাপ লোকেশন দেখুন। </p>
                <div
                    className='pt-2'
                >
                    <Link
                        href='/doctors'
                        className='px-4 py-2 bg-blue-500 text-white rounded'
                    >
                        সকল ডাক্তারগণ
                    </Link>
                </div>
            </div>
            <div
                className='md:w-8/12 md:flex justify-end hidden'
            >
                <Image
                    src='/image/herobanner.avif'
                    alt='doctors-appointment'
                    width={500}
                    height={200}
                    className='w-full md:w-[500px] rounded-md'
                />
            </div>
        </div>
    )
}
