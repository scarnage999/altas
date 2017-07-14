import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Micomponente from './mi_componente';
import {Button, Icon} from 'react-materialize'

class App extends Component {

constructor(props){
  super(props)
    this.state = {numero_1 : 0}
    this.state = {numero_2 : 0}
    this.suma = this.suma.bind(this)
    this.state = { empleados: [] }
}

  componentWillMount() {
    fetch('')
      .then((response) => {
        return response.json()
      })
      .then((empleados) => {
        this.setState({ empleados: empleados })
      })

      
  }


componentDidMount()
{
  
  this.setState({numero_1 : 3})
  //console.log('componentDidMount')
  console.log("hola")
  console.log(this.state.empleados)
   
}

suma(){
//Let vive en en la funcion no afecta otras variables como var
 // this.setState({numero_1:1})


 let num = this.state.numero_1
 this.setState({numero_1: num +1})
}

  render() {

    //console.log(this.state.numero_1)
    return (
      <div className="App">
  <nav className="green">
    <div className="nav-wrapper">
       <img src="" className="App-logo" alt="logo" />
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
        



        <div className="App-header">
         <div className="container">
         <div className="row"> 
          <h5>Altas</h5>
        </div>
      
          <button className="btn waves-effect waves-light" id="boton_prueba" name="PRUEBA" onClick={this.suma}>Press me</button>
          <Micomponente listado={this.state.empleados} estado_1={this.state.numero_1} fun_suma= {this.suma}/>
        </div> 
        </div>
      </div>
 

    );
  }
}

export default App;
