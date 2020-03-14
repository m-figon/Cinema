import React,{Component} from 'react';
import './popup.style.css';
class Popup extends Component{
    constructor(){
        super();
        this.state={
            email: "",
            password: "",
            loged: false
        };
        this.enterUserName = this.enterUserName.bind(this);
        this.enterPassword = this.enterPassword.bind(this);
        this.closeWindow = this.closeWindow.bind(this);
        this.loginOperation = this.loginOperation.bind(this);
    }
    enterUserName(event){
        this.setState({
            email: event.target.value
        })
    }
    enterPassword(event){
        this.setState({
            password: event.target.value
        })
    }
    closeWindow(){
        this.setState({
            closed: true
        })
        //tu moznaby zmienic this.props.id mozna sprobowac zrobic tak zeby clicked bylo czescia tej klasy
        //wtedy nie bedzie problemu
    }
    loginOperation(){
        if(this.state.email!=="" && this.state.password!==""){
            this.setState({
                loged: true
            })
        }else if(this.state.email!=="" && this.state.password===""){
            alert("Prosze podac hasło");
        }else if(this.state.email==="" && this.state.password!==""){
            alert("Prosze podac adres e-mail");
        }else if(this.state.email==="" && this.state.password===""){
            alert("Prosze podac adres e-mail oraz hasło");
        }
        
    }

    render(){
        
        if(this.props.id===true && this.state.loged===false){
            return ( 
                <div class="pop-up">
                    <button onClick={this.closeWindow}>Close</button>
                    <form>
                    <label>Adres e-mail: </label><input type='text' value={this.state.email} onChange={this.enterUserName}/>
                    <label>Hasło: </label><input type="password" value={this.state.password} onChange={this.enterPassword}/>
                    </form>
                   <h1 onClick={this.loginOperation}>Zaloguj</h1> 
                </div>
            )
        }else if(this.props.id===true && this.state.loged===true){
               return(
                <div class="loged">
                <h1>Jesteś zalogowany jako: {this.state.email}</h1>
                </div>
               )            
        }else{
            return(
                <div class="loged">
                <h1>Jesteś wylogowany</h1>
                </div>
            )
        }
    }
    
        

}
export default Popup;