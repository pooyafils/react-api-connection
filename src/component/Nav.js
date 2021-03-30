import React from 'react'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
const Nav =()=>{
//npm install npm install --save bootstrap@^4.0.0-alpha.6 react-bootstrap@^0.32.1
// npm install jquery bootstrap --save
// npm install popper.js --save
    return(
        <div className="container">
<ul className="list-unstyled">
    <Link to="/SinglePersonInfoGettingFormServerAxios"><li><a>SinglePersonInfoGettingFormServerAxios</a></li></Link>
    <Link to="/PersonInfoConsole"><li><a>PersonInfoConsole</a></li></Link>
    <Link to="/PersonInfoWithAxiosConsole"><li><a>PersonInfoWithAxiosConsole</a></li></Link>
    <Link to="/maininfo"><li><a>PersonInfoGettingFromServerAxiosLinkToOtherComponent</a></li></Link>
    <Link to="/PersonInfoGettingDataFromServer"><li><a>PersonInfoGettingDataFromServer</a></li></Link>
    <Link to="/PersonInfoWithClassAndFetch "><li><a>PersonInfoWithClassAndFetch</a></li></Link>
    <Link to="/PersonInfoWithClassAndFetchOtherExample"><li><a>PersonInfoWithClassAndFetchOtherExample</a></li></Link>
    <Link to="/SinglePersonInfoGettingFormServerAxiosInputStyle"><li><a>SinglePersonInfoGettingFormServerAxiosInputStyle</a></li></Link>
    <Link to="/PersonInfoDataDelete"><li><a>PersonInfoDataDelete</a></li></Link>
    <Link to="/PostPersonInformation"><li><a>PostPersonInformation</a></li></Link>
    <Link to="/EditPerson"><li><a>EditPerson</a></li></Link>
</ul>
        </div>
    )
}
export default Nav;