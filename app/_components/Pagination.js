'use client'
import ReactPaginate from 'react-paginate';
import '../../public/css/pagination.css'
import {useRouter} from 'next/navigation'

export default function Pagination({ total }) {
    const router = useRouter()
    const pages = Math.ceil(total / 10)
    const changePage = ({ selected }) => {
        router.push(`/doctors/pages/${selected}`)
    };
    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={changePage}
                pageRangeDisplayed={2}
                pageCount={pages}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="paginate"
                previousClassName="previousBtn"
                nextsClassName="nextBtn"
                disabledClassName="disabled"
                activeClassName="active"
            />
        </div>
    )
}
