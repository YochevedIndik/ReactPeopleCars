import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import AddPerson from "./AddPerson";
import Layout from "./Layout";
import AddCar from "./AddCar";
import DeleteCars from "./DeleteCars";


const App = () => {
    return (
        <Layout>
           <Route exact path='/' component={Home}/> 
           <Route exact path='/addperson' component={AddPerson}/>
           <Route exact path='/addcar/:id' component={AddCar}/>
           <Route exact path='/delete/:id' component={DeleteCars}/> 
        </Layout>
    )
}
export default App;
