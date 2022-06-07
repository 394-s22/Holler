import { Buttons } from "./buttons.js";
import { PDFViewer } from "./pdf-viewer.js";
import { PDFs } from "./pdfs-page.js";
import {PDFUpload } from "./pdf-upload.js";
import {useState} from 'react'
import { CalendarInterface } from "./calendar-page.js";
import '../App.css' 
import {defaultTheme, Flex, Provider, View} from '@adobe/react-spectrum'

/*
This component holds the entirety of the webapp, minus the title. 
*/


export const Body = () => {

    // state for whether the component prompting an upload is visible
    const [uploadVisibility, setUploadVisibility] = useState(true);
    // state for whether the pdf display component is visible
    const [pdfVisibility, setPdfVisibility] = useState(false);
    // state to get the uploaded pdf for display
    const [pdfFile, setPdfFile] = useState(null);
    // state for the expiration date from the uploaded pdf
    const [date, setDate] = useState("1/1/1990");
    // state for the expiration date description from the uploaded pdf
    const [dateDesc, setDatedesc] = useState("fill in desc");
    // state for the payment description (?) from the uploaded pdf
    const [rev, setRev] = useState("NA"); //Yes/No
    const [revDesc, setRevDesc] = useState("NA2"); //Yes/No
    const [pdfName, setpdfName] = useState("NA2"); //Yes/No

    /*
    Function called after a pdf is uploaded. Changes upload page visibility and pdf viewer visibility
    to "switch" to the pdf viewer page.
    */
    const handleVisibility = () =>{
        setUploadVisibility(!uploadVisibility);
        setPdfVisibility(!pdfVisibility);
    }


    return (
    <div >
        <PDFUpload 
        //MAYBE USE AWAIT ASYNC TO GET PDF FILE
        visibility = {uploadVisibility} 
        handleVisibility = {handleVisibility} 
        pdfFile = {pdfFile} 

        setPdfFile = {setPdfFile} 
        setDate = {setDate} 
        setRev={setRev}
        setRevDesc = {setRevDesc}
        setDatedesc = {setDatedesc}
        setpdfName = {setpdfName}/>
        <div className='body'>
        <div className="container">
            <PDFViewer 
            visibility = {pdfVisibility} 
            handleVisibility = {handleVisibility} 
            pdfFile = {pdfFile} 
            setPdfFile = {setPdfFile}
            />
        </div>
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