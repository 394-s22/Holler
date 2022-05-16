import { Buttons } from "./buttons.js";
import { PDFViewer } from "./pdf-viewer.js";
import { PDFs } from "./pdfs-page.js";
import {PDFUpload } from "./pdf-upload.js";
import {useState} from 'react'
import { CalendarInterface } from "./calendar-page.js";


/*
This component will have all the important stuff. So then in App we can just do <Body/>
*/




export const Body = () => {

    const [uploadVisibility, setUploadVisibility] = useState(true);
    const [pdfVisibility, setPdfVisibility] = useState(false);
    // pdf file onChange state
    const [pdfFile, setPdfFile] = useState(null);
    const [date, setDate] = useState("1/1/1990");
    const [dateDesc, setDatedesc] = useState("fill in desc");
    const [rev, setRev] = useState("NA"); //Yes/No
    const [revDesc, setRevDesc] = useState("NA2"); //Yes/No

    const handleVisibility = () =>{
        setUploadVisibility(!uploadVisibility);
        setPdfVisibility(!pdfVisibility);
    }
    // className='body'


    return (
    <div >
        <PDFUpload 
        visibility = {uploadVisibility} 
        handleVisibility = {handleVisibility} 
        pdfFile = {pdfFile} 
        setPdfFile = {setPdfFile} 
        setDate = {setDate} 
        setRev={setRev}
        setRevDesc = {setRevDesc}
        setDatedesc = {setDatedesc}/>
        <div className='body'>
            <PDFViewer 
            visibility = {pdfVisibility} 
            handleVisibility = {handleVisibility} 
            pdfFile = {pdfFile} 
            setPdfFile = {setPdfFile}
            />
            <div className='container-2'>
                <Buttons 
                visibility = {pdfVisibility} 
                date = {date} 
                rev = {rev}
                dateDesc = {dateDesc}
                revDesc = {revDesc}/>
                <CalendarInterface 
                visibility = {pdfVisibility}/>
            </div>
            
        </div>
        
    </div>
    )
}


export default Body;