import React from "react";
import './footer.css';
import cinewizardlogo from '../assets/images/cinewizardlogo.png';

function Footer(){

    return (
        <>
        <div className="container-fluid bg-warning setsize">
            <div className="row">
                <div className="col-lg-4">
                <form>
                    <span className="stylefont">Stay connected</span>
                    <div class="input-group mb-3 setwidth">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Email Address"  aria-label="Username" aria-describedby="basic-addon1"/>
                   &nbsp;
                    <button type="submit" class="btn btn-outline-success">Signup</button>
                    </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    
                </div>
                <div className="col-lg-4">
                    <br />
                    <span className="stylefont">Copyright @Cinewizard</span>
                    <img src={cinewizardlogo} alt="Loading Logo :)"  height={50} width={50}/>
                </div>

            </div>
        </div>
        </>
    );

}
export default Footer;