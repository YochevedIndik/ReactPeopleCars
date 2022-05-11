import React from "react";
import axios from 'axios';
import { produce } from 'immer';

class AddPerson extends React.Component{
 
    state = {
     
         firstName:'',
         lastName:'',
         age:''
         
     
 }

 onTextChange = e => {
    const newState = produce(this.state, draft =>{
        draft[e.target.name] = e.target.value;
    });
    this.setState(newState);
  

}
onAddButtonClicked =async() => { 
    console.log('click');
await axios.post('/api/home/addperson', this.state);
await console.log(this.state.people);
this.props.history.push('/');
}
render(){

    const{firstName, lastName, age} = this.state;
    return (
        <div className="row jumbotron">
        <div className="col-md-3">
            <input value={firstName} onChange={this.onTextChange} name='firstName' type="text" className="form-control" placeholder="First Name" />
        </div>
        <div className="col-md-3">
            <input value={lastName} onChange={this.onTextChange} name='lastName' type="text" className="form-control" placeholder="Last Name" />
        </div>
        <div className="col-md-3">
            <input value={age} onChange={this.onTextChange} name='age' type="text" className="form-control" placeholder="Age" />
        </div>
        <div className="col-md-3">
          
            <button className='btn btn-primary btn-block'  onClick={this.onAddButtonClicked}>Add</button>
        </div>
    </div>
    

    )}
}
    



export default AddPerson;