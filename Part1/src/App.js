import React, { Component } from 'react';
import css from "./App.css";
class App extends Component {
  constructor(){
    super();
    this.state = {
      email:"",
      password:"",
      number:"",
      isValidEmail:false,
      isValidPassword:false,
      isSubmitted:false
    }
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
[e.target.name]:e.target.value,
    })
  if(this.state.email != "" && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)){
        this.setState({
          isValidEmail:true,
        })
  
}
if(this.state.password !== "" && /(?=.*\d)(?=.*[a-z])/.test(this.state.password)){
  this.setState({
    isValidPassword:true,
  })
}

  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.isValidEmail == true && this.state.isValidPassword==true){
      console.log(true)
    }else{
      console.log(false)
    }
    this.setState({
      isSubmitted:true
    })
  }
  
  render(){
    const style= {
    border:this.setState== "" ? "1px solid black": "1px solid red",
  }
    return(
      <div >
        <header>
          <h1> IA-FrontEnd-interview</h1>
        </header>
          
          <form>
            <div className="wrapper">
              <div className="input">
            <div style={{border:"1px solid black", borderRadius:"5px"}}>
              <h1 style={{color:"red"}}>*</h1>
            <input name="email" style={style} type ="email" onChange={this.handleChange} required placeholder="Please Enter your email address"/>
            {this.state.isValidEmail==false ? (<p>Your email address seems to be incorrect</p>) : (<p> The email is correct</p>)}
            </div>
            <div style = {{border:"1px solid black", borderRadius:"5px"}}>
            <h1 style={{color:"red"}}>*</h1>
            <input name ="password" type ="password" onChange={this.handleChange} required placeholder ="Please Enter your password"/>
            {this.state.isValidPassword==false? (<p  className="error">Your password must contain at least 1 letter and one alphabet</p>):(<p className="error"> Password is correct</p>)}
            </div>
            <div style= {{border:"1px solid black", borderRadius:"5px"}}>
            <input name="number" type="tel" onChange={this.handleChange} placeholder="Please enter your phone number"/>
            </div>
            <input className="mybtn" type="submit" value ="Submit form" onClick= {this.handleSubmit}/>
            {this.state.isSubmitted==false?(<p></p>) : (<p> The form was submitted do check the console</p>)}
            </div>
            </div>
            </form>
            
      </div>
    )
  }

}

export default App;
