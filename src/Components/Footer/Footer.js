import React from 'react';
import Typical from 'react-typical'
import '../../StyleFile/style.css';


const Footer = () => {
    
    return (
        <footer  className="p-1 footer-wrap">
            <div>
                <Typical
                        className="text-center text-dark"
                        steps={['Power of', 2000, 'React developer!', 500]}
                        loop={Infinity}
                        wrapper="p"
                    />
            </div>
        </footer>
    );

}


export default Footer;