import React from 'react'
import "./ProductView.css"
function ProductView({data}) {
    return (
        <div className="col-md-4 card">
            <div className="product py-4"> 
            {/* <span className="off bg-success">-25% OFF</span> */}
                <div className="text-center"> <img alt="" src={data.src} width="200" /> </div>
                <div className="about text-center">
                    <h5>{data.name}</h5> <span>Rs. {data.price}</span>
                </div>
                {/* <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center"> <button className="btn btn-primary text-uppercase">Add to cart</button>
                    <div className="add"> <span className="product_fav"><i className="fa fa-heart-o"></i></span> <span className="product_fav"><i className="fa fa-opencart"></i></span> </div>
                </div> */}
            </div>
        </div>
    )
}

export default ProductView;
