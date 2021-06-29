import React from 'react';
import '../../StyleFile/style.css';


const TodoWrap = ({children}) =>{


    return (
        <div className="Todo-wrapper">
            {children}
        </div>
    );


}


export default TodoWrap;