import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../store/actions/userActions';

export const Paginate = () => {
    const totalPages = useSelector(state => state.users.searchResults.totalPages)
    const currentPage = useSelector(state => state.users.searchResults.currentPage)
    const dispatch = useDispatch()
    const [pages, setPages] = useState([])
    const pagination=(currentPage)=>{
        setPages([])
        for (let i = 1; i <= totalPages; i++) {
            
            if (i===currentPage+2&& totalPages>=4&&currentPage+5<=totalPages&&totalPages>=9) {
                setPages(prevState=>[...prevState,'...'])
                if (currentPage-2>=3) {
                    setPages([1,2,3,'...',currentPage-1,currentPage,currentPage+1,'...'])
                }
                i=totalPages-3
            }
            if (currentPage+5>=totalPages&&currentPage+2<totalPages&&totalPages>=9) {
                setPages([1,2,'...',totalPages/2-1,totalPages/2,totalPages/2+1,'...',currentPage-1,currentPage,currentPage+1,totalPages])
                break;
            }
            if (currentPage+5>=totalPages&&currentPage+2===totalPages&&totalPages>=9) {
                setPages([1,2,'...',totalPages/2-1,totalPages/2,totalPages/2+1,'...',currentPage-1,currentPage,currentPage+1===totalPages?totalPages:currentPage+1,totalPages])
                break;
            }
            if (currentPage+5>=totalPages&&currentPage+1===totalPages&&totalPages>=9) {
                setPages([1,2,'...',totalPages/2-1,totalPages/2,totalPages/2+1,'...',currentPage-1,currentPage,currentPage+1===totalPages?totalPages:currentPage+1,'...',totalPages])
                break;
            }
            if (currentPage+5>=totalPages&&currentPage===totalPages&&totalPages>=9) {
                setPages([1,2,'...',totalPages/2-1,totalPages/2,totalPages/2+1,'...',totalPages-1,totalPages])
                break;
            }

                setPages(prevState=>[...prevState,i])
        }
    }
    useEffect(() => {
        pagination(currentPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalPages,currentPage])
    return (
        <div className="pagination">
            <button onClick={()=>currentPage!==1&&dispatch(changePage(currentPage-1))}>Previous</button>
            {pages.map(page=>page==='...'?<p className="page-dotted">...</p>:<button className={currentPage===page&&"active"} onClick={()=>dispatch(changePage(page))}>{page}</button>)}
            <button onClick={()=>currentPage!==totalPages&&dispatch(changePage(currentPage+1))}>Next</button>
        </div>
    )
}
