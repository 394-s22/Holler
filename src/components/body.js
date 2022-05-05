import { Buttons } from "./buttons.js";
import { PDFViewer } from "./pdf-viewer.js";
import { PDFs } from "./pdfs-page.js";
import {PDFUpload } from "./pdf-upload.js";
import {useState} from 'react'


/*
This component will have all the important stuff. So then in App we can just do <Body/>
*/




export const Body = () => {

    console.log(document.getElementsByClassName('form-control')[0].files[0]["name"])

    const [uploadVisibility, setUploadVisibility] = useState(true);
    const [pdfVisibility, setPdfVisibility] = useState(false);
    // pdf file onChange state
    const [pdfFile, setPdfFile] = useState(null);

    const handleVisibility = () =>{
        setUploadVisibility(!uploadVisibility);
        setPdfVisibility(!pdfVisibility);
    }
    // className='body'

    return (
    <div >
        <PDFUpload visibility = {uploadVisibility} handleVisibility = {handleVisibility} pdfFile = {pdfFile} setPdfFile = {setPdfFile} />
        <div className='body'>
            <PDFViewer visibility = {pdfVisibility} handleVisibility = {handleVisibility} pdfFile = {pdfFile} setPdfFile = {setPdfFile}/>
            <Buttons visibility = {pdfVisibility}/>
        </div>
        
    </div>
    )
}


export default Body;