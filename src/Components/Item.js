import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from "../constants/routes";
// import "../css/item.css";

export default function Item() {
    return (
        <>
              <div className="products">
                <img src="https://static.vecteezy.com/system/resources/previews/005/073/073/original/no-item-in-the-shopping-cart-add-product-click-to-shop-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" className='productimage' alt=""  />
                <p className='producttext'>Add Products/Items you sell or purchase to manage your full Stock Inventory.</p>
             <Link to={ROUTES.ADDITEM} className='add-item-button'>Add Your First Product</Link>
            </div> 
            {/* <button><Link to={ROUTES.ADDITEM}>Add Item</Link></button> */}
            
        </>
    )
}
