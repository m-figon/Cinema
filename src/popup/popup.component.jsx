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
    }
    loginOperation(){
        const {email,password} = this.state;
        if(email!=="" && password!==""){
            this.setState({
                loged: true
            })
        }else if(email!=="" && password===""){
            alert("Prosze podac hasło");
        }else if(email==="" && password!==""){
            alert("Prosze podac adres e-mail");
        }else if(email==="" && password===""){
            alert("Prosze podac adres e-mail oraz hasło");
        }
        
    }

    render(){
        const {email,password,loged} = this.state;
        const {id} = this.props;
        if(id===true && loged===false){
            return ( 
                <div class="pop-up">
                    <br></br>
                    <form>
                    <label>Adres e-mail: </label><input type='text' value={email} onChange={this.enterUserName}/>
                   <br></br><br></br> <label>Hasło: </label><input type="password" value={password} onChange={this.enterPassword}/>
                    </form>
                    <br></br>
                   <h1 onClick={this.loginOperation}>Zaloguj</h1> 
                </div>
            )
        }else if(id===true && loged===true){
               return(
                <div class="loged">
                <h1>Zalogowany: {email}</h1>
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