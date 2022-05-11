import React from "react";


function Search ({ searchingFor, onTextChange, onClearClick }){
   
    return(
<div className="container">
    <div className="jumbotron">
        <input type="text" name='searchingFor' value={searchingFor} onChange={onTextChange} placeholder='Search'/>

    </div>
    <div className="container">
        <button className="btn btn-info" onClick={onClearClick}>Clear</button>
    </div>
</div>
    )
}
export default Search;