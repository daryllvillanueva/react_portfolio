import React from 'react'
import ModalWrapper from './ModalWrapper'
import { LiaTimesSolid, LiaTrashSolid } from 'react-icons/lia'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryData } from '../../helpers/queryData';
import { setIsDelete, setMessage, setSuccess } from '../../../store/StoreAction';
import { StoreContext } from '../../../store/StoreContext';

const ModalDelete = ({endpoint, queryKey}) => {
  const {store, dispatch} = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsDelete(false));
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) => queryData(endpoint, "delete", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      if (data.success) {
        dispatch(setIsDelete(false));
        dispatch(setSuccess(true))
        dispatch(setMessage('Record Successfully Deleted'))
      } else {
        // setIsError(true)
        // setMessage('Delete failed!')
      }
      
    },
  });

  const handleDelete = async () => {
    mutation.mutate();
  };

  return (
    <ModalWrapper position="center">
        <div className="modal-main max-w-[400px] w-full">
            <div className="modal-header bg-alert text-white flex justify-between items-center p-3 rounded-t-md">
                <h4 className='mb-0 text-white'>Delete</h4>
                <button onClick={handleClose}><LiaTimesSolid/></button>
            </div>
            <div className="modal-body p-4 rounded-b-md bg-secondary">
                <div className='flex gap-4 items-center'>
                  <LiaTrashSolid className='text-4xl text-alert'/>
                  <div>
                    <h2 className='mb-2'>Removing Record</h2>
                    <p className='mb-5'>Are you sure you want to delete this record?</p>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <button className='btn btn--alert btn-form' onClick={handleDelete}>Okay</button>
                  <button className='btn btn--cancel btn-form' onClick={handleClose}>Cancel</button>
                </div>                
            </div>
        </div>
    </ModalWrapper>
  )
}

export default ModalDelete