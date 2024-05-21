import React from 'react'
import TableLoader from '../../../../partials/TableLoader'
import NoData from '../../../../partials/NoData'
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'
import ModalConfirm from '../../../../partials/modals/ModalConfirm'
import ModalDelete from '../../../../partials/modals/ModalDelete'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsActive, setIsAdd, setIsDelete } from '../../../../../store/StoreAction'

const UsersTable = ({isLoading, isFetching, user, setItemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext);
    const [isArchiving, setIsArchiving] = React.useState(0);
    const [id, setID] = React.useState("");
    let counter = 1;

    const handleRestore = (item) => {
        dispatch(setIsActive(true))
        setID(item.user_aid)
        setIsArchiving(1)
      }
      
      const handleDelete = (item) => {
        dispatch(setIsDelete(true)) 
        setID(item.user_aid)
      }
  
      const handleArchive = (item) => {
        dispatch(setIsActive(true))
        setID(item.user_aid)
        setIsArchiving(0)
      }
      
      const handleEdit = (item) => {
        dispatch(setIsAdd(true))
        setItemEdit(item)
      }


  return (
    <>
        <div className="table-wrapper relative">
            {isFetching && <SpinnerFetching/>}
        <table>
                <thead>
                <tr>
                    <th className='w-[20px]'>#</th>
                    <th className='w-[150px]'>Name</th>
                    <th className='w-[80px]'>Email</th>
                    <th className='w-[80px]'>Description</th>
                </tr>
                </thead>
                <tbody>
                    {isLoading && (
                        <tr>
                            <td colSpan={9}>
                            <TableLoader count="20" cols="4"/>
                            </td>
                        </tr>
                        )
                    }
                    
                    
                    {user?.data.length === 0 && (
                        <tr>
                            <td colSpan={9}>
                                <NoData/>
                            </td>
                        </tr>
                        )
                    }

                    {user?.data.map((item,key) => (
                        <tr key={key}>
                            <td>{counter++}</td>
                            <td>{item.user_name}</td>
                            <td>{item.user_email}</td>
                            <td className='table-action w-[5rem]'>
                                <ul>
                                    {item.user_is_active ? (
                                    <>
                                        <li><button className='tooltip' data-tooltip="Edit" onClick={() => handleEdit(item)}><LiaEdit/></button></li>
                                        <li><button className='tooltip' data-tooltip="Archive"  onClick={() => handleArchive(item)}><PiArchive/></button></li>
                                    </>
                                    ) : (
                                    <>
                                        <li><button className='tooltip' data-tooltip="Restore"  onClick={() => handleRestore(item)}><LiaHistorySolid/></button></li>
                                        <li><button className='tooltip' data-tooltip="Delete"  onClick={() => handleDelete(item)}><LiaTrashAltSolid/></button></li>
                                    </>
                                    )}
                                </ul>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
        </table>
        </div>
        {store.isActive && <ModalConfirm queryKey="user" endpoint={`/v1/user/active/${id}`} isArchiving={isArchiving}/>}
        {store.isDelete && <ModalDelete queryKey="user" endpoint={`/v1/user/${id}`}/>}
    </>
  )
}

export default UsersTable