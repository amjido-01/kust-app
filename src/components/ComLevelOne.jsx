import React from 'react';
import { Materials } from './Materials';


export const ComLevelOne = () => {
    const openPDFInNewTab = (fileRef) => {
        try {
          // Get the download URL of the PDF file
          getDownloadURL(ref(storage, fileRef))
            .then((downloadURL) => {
              // Create an anchor element
              const link = document.createElement("a");
              link.href = downloadURL;
              link.target = "_blank";
      
              // Simulate a click on the anchor element to open the file in a new tab
              link.click();
            })
            .catch((error) => {
              console.log("Error opening PDF file:", error);
            });
        } catch (error) {
          console.log("Error opening PDF file:", error);
        }
      };
      

  return (
    <div>
        <h1>hello from level one</h1>
        <Materials level="100" department="Computer" openPDFInNewTab={openPDFInNewTab}/>
    </div>
  )
}
