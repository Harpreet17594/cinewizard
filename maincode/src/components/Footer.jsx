import React from "react";
import './footer.css';
import cinewizardlogo from '../assets/images/cinewizardlogo.png';

function Footer(){

    return (
        <>
        <div className="container-fluid bg-warning setsize">
            <div className="row">
                <div className="col-lg-12">
                    
                    <img src={cinewizardlogo} alt="Loading Logo :)"  height={50} width={50} className="setmargin"/>
                    <p className="stylefont">Copyright @Cinewizard</p>
                    
                </div>

            </div>
        </div>
        </>
    );

}
export default Footer;