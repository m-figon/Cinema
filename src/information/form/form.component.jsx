import React from 'react';
import './form.style.css'
function Form(props) {
    return (
        <form>
            <div class="select">
                <label>KINO: </label>
                <select value={props.value} onChange={props.cityHandler}>
                    <option value="" ></option>
                    <option value="gdansk" >Gdańsk</option>
                    <option value="warszawa">Warszawa</option>
                    <option value="krakow">Kraków</option>
                    <option value="wroclaw">Wrocław</option>
                </select>
            </div>
        </form>

    )

}

export default Form;