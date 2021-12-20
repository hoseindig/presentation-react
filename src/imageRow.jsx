import React  from 'react';
// import logo from "image/logo.png";
import logo from "./image/logo.png";

class ImageRow extends React.Component {
    render() { 
        return <div>
            <img src={logo} alt="" />
        </div>;
    }
}
 
export default ImageRow;