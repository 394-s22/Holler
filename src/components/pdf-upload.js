/*
A component that allows you to upload a PDF. 
*/

import {useState} from 'react'

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export const PDFUpload = (props) => {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // pdf file error state
    const [pdfError, setPdfError]=useState('');

    // handle file onChange event
    const allowedFiles = ['application/pdf'];
    const handleFile = (e) =>{
        let selectedFile = e.target.files[0];
        if(selectedFile){
        if(selectedFile&&allowedFiles.includes(selectedFile.type)){
            let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend=(e)=>{
            setPdfError('');
            props.setPdfFile(e.target.result);
            // pass this to pdf-viewer
            }
        }
        else{
            setPdfError('Not a valid pdf: Please select only PDF');
            props.setPdfFile('');
        }
        }
        else{
        console.log('please select a PDF');
        }
    }
    const getPDFAttributes = (e) => {
        let fileName = e.target.files[0].name;
        console.log(fileName)
    }

    //if visible, then display the pdf upload
    if(props.visibility){
        return (
            <div className="container">
            {/* Upload PDF */}
            <form>
    
            <label><h5>Upload PDF</h5></label>
            <br></br>
    
            <input type='file' className="form-control"
            onChange={(e) => {handleFile(e); props.handleVisibility(); getPDFAttributes(e);}}></input>
    
            {/* we will display error message in case user select some file
            other than pdf */}
            {pdfError&&<span className='text-danger'>{pdfError}</span>}
    
            </form>
    
        </div>
        )
    }

}