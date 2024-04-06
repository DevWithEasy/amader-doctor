'use client'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { useRouter } from 'next/navigation'

export default function Pagination({ total,page }) {
    const router = useRouter()
    const pages = Math.ceil(total / 10)
    const changePage = (page) => {
        if(page === 1){
            router.push(`/doctors`)
        }else{
            router.push(`/doctors/pages/${page}`)
        }
    };
    return (
        <div>
            <ResponsivePagination
                current={page}
                total={pages}
                onPageChange={(page)=>changePage(page)}
            />
        </div>
    )
}
