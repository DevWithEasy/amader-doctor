import { toBengaliNumber } from 'bengali-number';

const Info = ({children,title,bg_color,text_color,value}) => {
    return (
        <div className={`${bg_color} ${text_color} flex items-center rounded-md p-4 space-x-4`}>
            <div
                className='p-2 w-12 h-12 flex justify-center items-center shrink-0 rounded-full'
            >
                {children}
            </div>
            <div
                className='w-full'
            >
                <p>
                    {title} : 
                </p>
                <p 
                    className='text-xl tracking-wide font-semibold'
                >
                    {toBengaliNumber(value)}
                </p>
            </div>
        </div>
    );
};

export default Info;