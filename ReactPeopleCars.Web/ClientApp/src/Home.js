import React from "react";
import { Link } from "react-router-dom";
import PersonRow from './PersonRow';
import axios from 'axios';
import Search from "./Search";
import { produce } from 'immer';

class Home extends React.Component {

    state = {
        people: [],
        searchingFor: ''
    }

    componentDidMount = async () => {
        const { data } = await axios.get('/api/home/getall');
        this.setState({ people: data });
    }
    onTextChange = e => {
        const newState = produce(this.state, draft => {
            draft[e.target.name] = e.target.value;
        });
        this.setState(newState);
    }
    onClearClick = () => {
        this.setState({ searchingFor: '' });
    }

    render() {
        const searchingFor = this.state.searchingFor.toLowerCase();
        return (
            <div>
                <Search onTextChange={this.onTextChange} searchingFor={this.state.searchingFor} onClearClick={this.onClearClick} />


                <div className='container'>
                    <div className="col-md-12">
                        <Link to={`/addperson`}>
                            <button className="btn btn-primary">Add Person</button>
                        </Link>



                    </div>

                    <table className="table table-hover table-bordered table-striped">
                        <thead>
                            <tr>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Age</td>
                                <td>Car Count</td>
                                <td>Add Car</td>
                                <td>Delete Car</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.people
                                .filter(p => `${p.firstName.toLowerCase()} ${p.lastName.toLowerCase()}`.includes(searchingFor))
                                .map(p => <PersonRow person={p} key={p.id} />)}

                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}


export default Home;
