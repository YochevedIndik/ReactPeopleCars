import React from "react";
import axios from 'axios';
import { produce } from 'immer';

class AddCar extends React.Component{
 
    state = {
     
         make:'',
         model:'',
         year:'',
         person:{
             firstName:'',
             lastName:''
         },
         
     
 }
 componentDidMount = async() =>{
     const { id } = this.props.match.params;
     
     const { data } = await axios.get(`/api/home/getperson?id=${id}`);
     this.setState({ person: data });
     
 }
 onTextChange = e => {
    const newState = produce(this.state, draft =>{
        draft[e.target.name] = e.target.value;
    });
    this.setState(newState);
  

}
onAddButtonClicked = async() => { 
    
const { id } = this.props.match.params; 
const personId = id;
const{make, model, year} = this.state; 
await axios.post('/api/home/addcar', { make, model, year, personId });

this.props.history.push('/');
}

render(){

    const{make, model, year, person } = this.state;
    const {firstName, lastName} = person;
    return (
        <div className="row jumbotron">
            <div className="container">
            <h2>Add Car for {firstName} {lastName}</h2>
            </div>
        <div className="col-md-3">
            <input value={make} onChange={this.onTextChange} name='make' type="text" className="form-control" placeholder="Make" />
        </div>
        <div className="col-md-3">
            <input value={model} onChange={this.onTextChange} name='model' type="text" className="form-control" placeholder="Model" />
        </div>
        <div className="col-md-3">
            <input value={year} onChange={this.onTextChange} name='year' type="text" className="form-control" placeholder="Year" />
        </div>
        <div className="col-md-3">
          
            <button className='btn btn-primary btn-block'  onClick={this.onAddButtonClicked}>Add</button>
        </div>
    </div>
    

    )}
}
    



export default AddCar;