import React from 'react'
import { PDFObject } from 'react-pdfobject';

const CV = () => {
  return (
    <div className='h-screen'>
            <PDFObject url="../../CV-VILLANUEVA.pdf" />
    </div>
  )
}

export default CV