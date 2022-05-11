import React from "react";
import axios from 'axios';
import CarRow from "./CarRow";
import { Link } from 'react-router-dom';



class DeleteCars extends React.Component {

    state = {
        cars: []

    }
    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/home/getcars?id=${id}`);
        this.setState({ cars: data });
    }
    onDeleteClick = async () => {
       const { id } = this.props.match.params;
        await axios.post('/api/home/deletecars', { id });
        this.props.history.push('/');
 
    }
 




    render() {
        return (
            <div className="container">
                <table className="table table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <td>Make</td>
                            <td>Model</td>
                            <td>Year</td>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cars.map(c => <CarRow
                            car={c}
                            key={c.id} />)}
                    </tbody>
                </table>


                <div className="container">
                    <h2>Are you sure you want to delete all these cars??</h2>
                    <div className="col-md-6">
                        <Link to='/'>
                            <button className='btn btn-primary' >No</button>
                        </Link>
                    </div>
                    <div className='col-md-6'>
                        <button className='btn btn-danger' onClick={this.onDeleteClick} >Delete</button>
                    </div>
                </div>
            </div>

        )
    }
}
export default DeleteCars;