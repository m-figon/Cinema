import React from 'react';

function Form(props){
    return(
        <form>
                <label>Kino: </label>
                <select value={props.value} onChange={props.cityHandler}>
                    <option value="" ></option>
                    <option value="gdansk" >Gdańsk</option>
                    <option value="warszawa">Warszawa</option>
                    <option value="krakow">Kraków</option>
                    <option value="wroclaw">Wrocław</option>
                </select>
            </form>

    )

}

export default Form;