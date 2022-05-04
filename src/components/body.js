import { Buttons } from "./buttons.js";
import { PDFViewer } from "./pdf-viewer.js";
import { PDFs } from "./pdfs-page.js";
import {PDFUpload } from "./pdf-upload.js";

/*
This component will have all the important stuff. So then in App we can just do <Body/>
*/



export const Body = () => {
    const [uploadVisibility, setUploadVisibility] = useState(true);
    const [pdfVisibility, setPdfVisibility] = useState(false);
    return (
    <div>
        <PDFUpload visibility = {uploadVisibility} />
        <PDFViewer visibility = {pdfVisibility}/>
    </div>
    )
}

export default Body;