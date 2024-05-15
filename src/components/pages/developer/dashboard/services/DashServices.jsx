import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import ServicesTable from './ServicesTable'
import ModalAddServices from './ModalAddServices'
import useQueryData from '../../../../custom-hook/useQueryData'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsAdd } from '../../../../../store/StoreAction'
import Toast from '../../../../partials/Toast'
import ModalError from '../../../../partials/modals/ModalError'
import Navigation from '../../../../partials/Navigation'
import Top from '../../../../partials/Top'

const DashServices = () => {
    const {store, dispatch} = React.useContext(StoreContext);
    const [isSearch, setIsSearch] = React.useState(false);
    const [keyword, setKeyword] = React.useState('');
    const [itemEdit, setItemEdit] = React.useState(null);
    const handleAdd = () => {
        dispatch(setIsAdd(true))
        setItemEdit(null)
    }

    const {
        isLoading,
        isFetching,
        error,
        data: services,
    } = useQueryData (
            isSearch ? "/v1/services/search" : "/v1/services", // endpoint
            isSearch ? "post" : "get", // method
            "services", // key
            {
                searchValue: keyword
            }
      );


  return (
    <section className='flex'>
        <Navigation/>
        <main className='w-[calc(100%-250px)]'>
          <Top/>
            <div className='flex relative'>
              <div className={`main-wrapper transition-all px-4 py-3 w-full`}>
                <div className='flex justify-between items-center'>
                  <h1>Database</h1>
                  {/* <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/> */}
                </div>

                <div className='tab flex items-center justify-between mt-8 border-b border-line mb-8'>
                  <h2>Search</h2>  
                  <button className='btn btn--accent'>
                    <FiPlus onClick={handleAdd}/>New
                  </button>
                </div>
                <ServicesTable isLoading={isLoading} services={services} isFetching={isFetching} setItemEdit={setItemEdit}/>
              </div>
            </div>
        </main>
        {store.isAdd && <ModalAddServices  itemEdit={itemEdit}/>}
        {store.success && <Toast />}
        {store.error && <ModalError />}
        
    </section>
  )
}

export default DashServices