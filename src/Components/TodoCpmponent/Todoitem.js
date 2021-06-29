import React from 'react';
import {Card,CardBody,CardFooter,CardText } from 'reactstrap';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import '../../StyleFile/style.css';

const Todoitem = ({passData,DeleteTodo,EditTodo}) => {
    

    const Iconstyel = {
        cursor: 'pointer',
        color:'#e84118'
    }

    
    return passData.map((item, index) => {
        
        return (
            <Card key={index} className="Todo-card border-0">
                <CardBody>
                    <CardText className="text-center">{item}</CardText>
                </CardBody>
                 <CardFooter className="border-0">
                    <div className="d-flex justify-content-around">
                        <MdDelete style={Iconstyel} onClick={()=>DeleteTodo(index)}/>
                        <FiEdit style={Iconstyel} onClick={() => EditTodo(item, index)} />
                    </div>
                </CardFooter>
            </Card>
        );

    })


}



export default Todoitem;