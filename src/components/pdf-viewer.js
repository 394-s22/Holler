/*
Component for the left side of a page when viewing a single PDF. Should allow scrolling through the PDF.

*/

import {useState} from 'react'

// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export const PDFViewer = (props) => {
    // creating new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    if(props.visibility){
        return (
            <div className="container">
    
            {/* View PDF */}
            <h5>View PDF</h5>
            <div className="viewer">
    
            {/* render this if we have a pdf file */}
            {props.pdfFile&&(
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
                <Viewer fileUrl={props.pdfFile}
                plugins={[defaultLayoutPluginInstance]}></Viewer>
                </Worker>
            )}
    
            {/* render this if we have pdfFile state null   */}
            {!props.pdfFile&&<>No file is selected yet</>}
    
            </div>
    
        </div>
      )
    }
    
}

export default PDFViewer;