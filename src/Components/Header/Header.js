import React from 'react';
import Typical from 'react-typical'
import '../../StyleFile/style.css';


const Header = () => {
    
    return (
         <div className="container-fluid header-warp">
            <div className="container">
                <div className="p-3">
                    
                    <Typical
                        className="d-inline text-success"
                        steps={['React', 2000, 'React Todo app!', 500]}
                        loop={Infinity}
                        wrapper="p"
                    />
                    <label className="switch float-end">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
         </div>   
    );

}




export default Header;