import React from 'react'
import ModalWrapper from './ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../helpers/queryData'
import { StoreContext } from '../../../store/StoreContext'
import { setIsActive, setMessage, setSuccess } from '../../../store/StoreAction'

const ModalConfirm = ({endpoint, queryKey, isArchiving}) => {
  const {dispatch} = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsActive(false));
  const handleConfirm = async () => {
    mutation.mutate({
      isActive: isArchiving,
    });
  };
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) => queryData(endpoint, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      if (data.success) {
        dispatch(setIsActive(false))
        dispatch(setSuccess(true))
        dispatch(setMessage(`Record Successfully ${isArchiving ? "Restored" : "Archived"}.`))
      } else {
        // setIsError(true)
        // setMessage(data.error)

      }
    
    },
  });
  return (
    <ModalWrapper position="center">
        <div className="modal-main max-w-[400px] w-full">
            <div className="modal-header bg-warning text-white flex justify-between items-center p-3 rounded-t-md">
                <h4 className='mb-0 text-white'>Confirm</h4>
                <button onClick={handleClose}><LiaTimesSolid/></button>
            </div>
            <div className="modal-body p-4 rounded-b-md bg-secondary">
                <div className='flex gap-4 items-center'>
                  <PiArchive className='text-4xl text-warning'/>
                  <div>
                    <h2 className='mb-2'>{isArchiving === 1 ? "Restore" : "Archive"} Record</h2>
                    <p className='mb-5'>Are you sure you want to {isArchiving === 1 ? "restore" : "archive"} this record?</p>
                  </div>
                </div>
                <div className='flex gap-2 justify-end'>
                  <button className='btn btn--warning btn-form w-1/4' onClick={handleConfirm}>Confirm</button>
                  <button className='btn btn--cancel btn-form w-1/4' onClick={handleClose}>Cancel</button>
                </div>                
            </div>
        </div>
    </ModalWrapper>
  )
}

export default ModalConfirm