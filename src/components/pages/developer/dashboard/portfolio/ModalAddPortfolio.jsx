import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import { InputFileUpload, InputText, InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { StoreContext } from '../../../../../store/StoreContext'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'
import useUploadPhoto from '../../../../custom-hook/useUploadPhoto'
import { devBaseImgUrl } from '../../../../helpers/functions-general'

const ModalAddPortfolio = ({itemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext)
    const handleClose = () => dispatch(setIsAdd(false));

    const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
        `/v1/upload/photo`,
        dispatch
    );

    const initVal = {
        portfolio_title: itemEdit ? itemEdit.portfolio_title : "",
        portfolio_category: itemEdit ? itemEdit.portfolio_category : "",
        portfolio_image: itemEdit ? itemEdit.portfolio_image : "",
        portfolio_description: itemEdit ? itemEdit.portfolio_description : "",
        portfolio_publish_date: itemEdit ? itemEdit.portfolio_publish_date : "",
    }

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/portfolio/${itemEdit.portfolio_aid}` : '/v1/portfolio',
            itemEdit ? "put" : "post",
            values
        ),
        // ;

        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["portfolio"] });
        if (data.success) {
            dispatch(setIsAdd(false));
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly updated.`));
        } else {
            dispatch(setError(true));
            dispatch(setMessage(data.error));
        }
      
        },
    });

    const yupSchema = Yup.object({
        portfolio_title: Yup.string().required("Required"),
        portfolio_category: Yup.string().required("Required"),
        portfolio_image: Yup.string().required("Required"),
        portfolio_description: Yup.string().required("Required"),
        portfolio_publish_date: Yup.string().required("Required"),
    })

  return (
    <ModalWrapper>
        <div className="main-modal w-[300px] bg-secondary text-content h-full">
            <div className="modal-header p-4 relative"> 
                <h2>New Student</h2>
                <button className='absolute top-[23px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
            </div>
            <div className="modal-body p-4">
                <Formik
                    initialValues={initVal}
                    validationSchema={yupSchema}
                    onSubmit={async (values) => {
                        uploadPhoto()
                        mutation.mutate({...values, 
                            portfolio_image:
                            (itemEdit && itemEdit.portfolio_image === "") || photo
                              ? photo === null
                                ? itemEdit.portfolio_image
                                : photo.name
                              : values.portfolio_image,})
                    }}
                >
                    <Form action="" className='flex flex-col h-[calc(100vh-110px)]'>
                        <div className='grow overflow-y-auto'>
                            
                            <div className="input-wrap">
                                {photo || (itemEdit && itemEdit.portfolio_image !== "") ? ( 
                                        <img src={photo ? URL.createObjectURL(photo) // preview 
                                        : itemEdit.portfolio_image // check db
                                        ? devBaseImgUrl + "/project/" + itemEdit.portfolio_image
                                        : null
                                    }
                                    alt="Photo" className="rounded-md h-[250px] max-h-[250px] w-full object-cover object-center m-auto bg-white"/>
                                ) : (
                                        <span className="min-h-20 flex items-center justify-center">
                                        <span className="text-accent mr-1">Drag & Drop</span>{" "}
                                        photo here or{" "}
                                        <span className="text-accent ml-1">Browse</span>
                                        </span>
                                    )}

                                {(photo !== null ||
                                    (itemEdit && itemEdit.portfolio_image !== "")) && (
                                        <span className="min-h-10 flex items-center justify-center">
                                            <span className="text-accent mr-1">Drag & Drop</span>{" "} photo here or{" "}
                                            <span className="text-accent ml-1">Browse</span>
                                        </span>
                                    )}

                                {/* <FaUpload className="opacity-100 duration-200 group-hover:opacity-100 fill-dark/70 absolute top-0 right-0 bottom-0 left-0 min-w-[1.2rem] min-h-[1.2rem] max-w-[1.2rem] max-h-[1.2rem] m-auto cursor-pointer" /> */}
                                <InputFileUpload
                                    label="Photo"
                                    name="photo"
                                    type="file"
                                    id="myFile"
                                    accept="image/*"
                                    title="Upload photo"
                                    onChange={(e) => handleChangePhoto(e)}
                                    onDrop={(e) => handleChangePhoto(e)}
                                    className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full"
                                /> 
                            </div>

                            <div className="input-wrap">
                                <InputText
                                    label="Title"
                                    type="text"
                                    name="portfolio_title"
                                />
                            </div>

                            <div className="input-wrap">
                                <InputText
                                    label="Category"
                                    type="text"
                                    name="portfolio_category"
                                />
                            </div>

                            <div className="input-wrap">
                                <InputText
                                    label="Image"
                                    type="text"
                                    name="portfolio_image"
                                />
                            </div>

                            <div className="input-wrap">
                                <InputTextArea
                                    label="Description"
                                    type="text"
                                    name="portfolio_description"
                                    className='h-[10rem] resize-none'
                                />
                            </div>

                            <div className="input-wrap">
                                <InputText
                                    label="Publish Date"
                                    type="text"
                                    name="portfolio_publish_date"
                                />
                            </div>

                        </div>

                        <div className="form-action">
                            <button className='btn btn--accent btn-form' type='submit'>{mutation.isPending ? <SpinnerButton/> : "Add"}</button>
                            <button className='btn btn--cancel btn-form' type='button' onClick={handleClose}>Cancel</button>
                        </div> 
                    </Form>
                </Formik>
            </div>
        </div>
    </ModalWrapper>
  )
}

export default ModalAddPortfolio


// no picture in the thumbnail
// : (
//     <span className="min-h-20 flex items-center justify-center">
//     <span className="text-accent mr-1">Drag & Drop</span>{" "}
//     photo here or{" "}
//     <span className="text-accent ml-1">Browse</span>
//     </span>
// )}