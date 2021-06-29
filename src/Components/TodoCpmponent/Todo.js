import React from 'react';
import Todoitem from './Todoitem';
import TodoWrap from '../Wrapcomponent/TodoWrap';
import { Form, Input, InputGroup } from 'reactstrap';
import Swal from 'sweetalert2';



class Todo extends React.Component{

    constructor() {
        super();
        this.state = {
            developerData: [],
            userInput: ''
        }
        
    }


     swalWithBootstrapButtons  = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success m-1',
          cancelButton: 'btn btn-danger m-1'
        },
        buttonsStyling: false
      })


    // Handle Input Change 

    HandleInput = (even) => { 
        this.setState({
            userInput: even.target.value
        });
    }


    // Handle Action Submit

    HandleSubmit = (even) => {

        even.preventDefault();
       
        let userNewData = this.state.userInput;

        let userOldData = this.state.developerData;

        userOldData.push(userNewData);

        this.setState({
            developerData:userOldData,
            userInput: ''
        });

        Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Ok'
        });

    }



    // Delete Todoitem

    DeleteTodo = (index) => {
        
        this.swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                let userState = [...this.state.developerData];

                userState.splice(index, 1);
        
                this.setState({
                    developerData: userState
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                this.swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        });

    }




    // Edit Todoitem
    
    EditTodo = (item,index) => {
       
        let editData = prompt(`${item}`);

        if (editData==='' || editData===null) {
            return false
        }
        else {
            let updateData = {
                ...this.state.developerData
            }
    
            updateData = editData;
    
            const newData = [...this.state.developerData]
    
             newData[index] = updateData;
    
            this.setState({
                developerData : newData
            })
        }

    }



    render() {
        
        const { developerData,userInput } = this.state;

        return (
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-6">
                    <Form onSubmit={this.HandleSubmit}>
                        <InputGroup>
                            <Input placeholder="Add New Item" value={userInput} onChange={this.HandleInput} required/>
                            <button className="btn btn-outline-success">Add</button>
                        </InputGroup>
                    </Form>
                </div>
                <div className="row">
                    <div className="col-12">
                       <TodoWrap>
                            <Todoitem passData={developerData}
                                DeleteTodo={this.DeleteTodo}
                                EditTodo={this.EditTodo}
                                OpenModal={this.OpenModal} />
                        </TodoWrap>
                 </div>
                </div>
            </div>
        );

    }


}



export default Todo