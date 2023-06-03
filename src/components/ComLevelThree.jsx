import React from 'react';
import { Materials } from './Materials';
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const storage = getStorage();



export const ComLevelThree = () => {
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
        <Materials level="300" department="Computer" openPDFInNewTab={openPDFInNewTab}/>
    </div>
  )
}
