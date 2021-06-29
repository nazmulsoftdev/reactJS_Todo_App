import React from 'react';
import Todo from '../TodoCpmponent/Todo';

const Body = () => {
    

    return (
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-8">
                  <Todo/>
                </div>
            </div>
        </div>
    );


}




export default Body;