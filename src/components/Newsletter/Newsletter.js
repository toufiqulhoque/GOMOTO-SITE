import React from 'react';
import './Newsletter.css'
const Newsletter = () => {
    return (
        <div className="row d-flex justify-content-center align-items-center rows">
            <div className="col-md-6">
                <div className="card">
                    <div className="text-center"> <img src="https://i.imgur.com/Dh7U4bp.png" width="200" /> <span className="d-block mt-3">Subscribe to our newsletter in order not to miss new arrivals <br /> promotions and discounts of our store</span>
                        <div className="mx-5">
                            <div className="input-group mb-3 mt-4"> <input type="text" className="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2" /> <button className="btn btn-success border-rad" type="button" id="button-addon2">Subscribe</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;