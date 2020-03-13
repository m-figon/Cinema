import React,{Component} from 'react';
import './popup.style.css';
function Popup(props){
    if(props.id===true){
        return ( 
            <div class="pop-up">
                <button>Close</button>
               <h1>{props.name}</h1> 
            </div>
        )
    }else{
        return(null);
    }
        

}
export default Popup;