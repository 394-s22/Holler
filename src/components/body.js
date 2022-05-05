import { Buttons } from "./buttons.js";
import { PDFViewer } from "./pdf-viewer.js";
import { PDFs } from "./pdfs-page.js";
import {PDFUpload } from "./pdf-upload.js";

/*
This component will have all the important stuff. So then in App we can just do <Body/>
*/

export const Body = () => {
    console.log(document.getElementsByClassName('form-control')[0].files[0]["name"])
    return (
    <div>
        <PDFViewer/>
    </div>
    )
}

export default Body;