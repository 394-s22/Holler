/*
A component that allows you to upload a PDF. 
*/

import {useState} from 'react'
import {useData as get_data} from '../utilities/firebase.js'
import { Highlight } from './highlight.js';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { PDFs } from './pdfs-page.js';

export const PDFUpload = (props) => {



    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // pdf file error state
    const [pdfError, setPdfError]=useState('');

    // getting data
    const [data, loading, error] = get_data('/'); 
    if (error) return <h1>{error}</h1>;
    if (loading) return <h1>Loading the Data...</h1>
    console.log(data)

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

            let fileName = selectedFile.name;
            console.log(fileName)
    


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

    const getPdfAttrib = (e) =>{
        let filename = e.target.files[0].name;
        const allPdfs = pdfToList(data["Cuad-Dataset"]);
        let filtered_pdf=allPdfs.filter(pdf => pdf["Filename"] === filename);
        console.log(filtered_pdf)
        return (
            <div>
                {/*PRINTS THIS STATMENT BUT highlight DOESNT WORK*/}
                 {console.log('asdfasdf')}
                {/* <Highlight pdf={filtered_pdf}/> */} 
            </div>
        )
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
            onChange={(e) => {handleFile(e); props.handleVisibility(); getPdfAttrib(e); }}></input>
    
            {/* we will display error message in case user select some file
            other than pdf */}
            {pdfError&&<span className='text-danger'>{pdfError}</span>}
    
            </form>
    
        </div>
        )
    }

}

const pdfToList = (pdf) =>{
    let arr = [];
    console.log(pdf);
    Object.keys(pdf).forEach(key => 
      arr.push(pdf[key]))  
    return arr;
}