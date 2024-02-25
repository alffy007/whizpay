import React, { useState } from "react";
import jsPDF from "jspdf";
import { storage } from "../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  uploadBytes,
} from "firebase/storage";

const customer = (props) => {
  const generatePdf = async () => {
    // Create a new jsPDF instance

    const docq = new jsPDF();

    // Add content to the PDF
    docq.text(`Total Bill :${props.passedData + cgst + sgst}₹`, 30, 170);
    docq.text("Lulu Mall, Kochi", 10, 10);
    props?.list.map((li,index) => {
      docq.text(`Item: ${li.product_name}`, 30, 50+(index*10));
    })
    props?.list.map((li,index) => {
      docq.text(` ${li.discounts}`, 100, 50+(index*10));
    })
    props?.list.map((li,index) => {
      docq.text(`${li.price}`, 140, 50+(index*10));
    })
   
    docq.text("CGST: 18%", 30, 150);
    docq.text("SGST: 18%", 30, 160);
   
    const fontSize = 44; // Choose the desired font size
    docq.setFontSize(fontSize);

    const pdfDataUri = docq.output("blob");
    // Upload the Blob to Firebase Storage
    const storageRef = ref(storage, `alffy/my-file.pdf`); // Specify the filename here

    uploadBytes(storageRef, pdfDataUri)
      .then(() => {
        console.log("PDF uploaded successfully");
      })
      .catch((error) => {
        console.error("Error uploading PDF:", error);
      });
    props?.list.map((li) => {
      const docRef = doc(db, "Lulu", li.product_name);
      const data = { warranty: li.warranty, Date: "25-02-2024",discounts:li.discounts};
      setDoc(docRef, data)
        .then(() => {
          console.log("Document has been added successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    });
    alert("done");
  };

  const cgst = props.passedData * 0.18;
  const sgst = props.passedData * 0.18;
  return (
    <div className="rounded-lg px-4 ml-7 py-2 w-1/2 bg-white mx-3 drop-shadow-md">
      <h1 className=" text-xl font-medium pt-3">Customer No: 2</h1>
      {props.list.product_name}
      <div>
        <h1 className="  text-xs font-semibold">
          Bill Amount: ₹{props.passedData}
        </h1>
        <h1 className=" pt-2 text-xs"> CGST : 18% </h1>
        <h1 className=" pt-2 text-xs"> SGST : 18% </h1>
        <h1 className="pt-2 text-xl font-bold">
          {" "}
          Total Bill :{props.passedData + cgst + sgst}
        </h1>
        <button
          className="bg-green-500 p-2 rounded-2xl text-white font-bold w-80 mt-3  flex-1"
          onClick={generatePdf}
        >
          Check out
        </button>
      </div>
    </div>
  );
};

export default customer;
