// import React from 'react'

// export default function AddSalesInvoice() {
//     return (
//         <div>AddSalesInvoice</div>
//     )
// }


import React, { useState } from "react";
import ReactDom from "react-dom";
import { createInvoice } from "../../services/InvoiceServices";
import ItemList from "./ItemListSales";


export default function AddSalesInvoice() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [invoiceID, setinvoiceID] = useState("")
  const [itemlist, setitemlist] = useState([
    {
      item: "",
      itemCategory: "",
      itemCode: "",
      decription: "",
      discount: "",
      quantity: "",
      unit: "",
      pricePerUnit: "",
      taxPercent: "",
      taxamount: "",
      amount: "",
    },
  ]);

  const handleChange = (e) => {
    setinvoiceID([e.target.name] = e.target.value);
  }
  const handleInvoice = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await createInvoice(invoiceID, itemlist);
      setLoading(false);
      window.location = "/dashboard/sales/";
    } catch (error) {
      setitemlist([
        {
          item: "",
          itemCategory: "",
          itemCode: "",
          decription: "",
          discount: "",
          quantity: "",
          unit: "",
          pricePerUnit: "",
          taxPercent: "",
          taxamount: "",
          amount: "",
        },
      ]);
      setError(error.message);
      setLoading(false);
    }
  }
  return ReactDom.createPortal(
    <div className="invoice">
      <div >
        {/* <input name="invoiceID" value={invoiceID} onChange={(e) => handleChange(e)} /> */}
        <ItemList itemlist={itemlist} setitemlist={setitemlist} />
        {/* <button className="btn btn--secondary"
          onClick={handleInvoice}
        >
          Create Invoice
        </button> */}
      </div>
    </div>,
    document.getElementById("invoice")
  );
}
