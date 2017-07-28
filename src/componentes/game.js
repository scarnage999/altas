import React, { Component } from 'react';
import '../css/game.css';
import atlas from '../img/atlas.png';



class Game extends Component {

constructor(props){
  super(props)
  this.state = {mover:0}
  this.left = this.left.bind(this)
  this.state= {desplazar: "des"}
  
}

left(){
//Let vive en en la funcion no afecta otras variables como var
 // this.setState({numero_1:1})
 let num = this.state.mover
 this.setState({mover: num +5})
 console.log('holo');
}

navOpen() {
    this.setState({desplazar:"desplazar"})
}



  render() {

var margin = this.state.mover;

var personaje = {
	width:'120px',
	height:'70px',
  marginLeft:margin,
  
  
}


 
 var ala_der = {
    backgroundImage: 'url(' + atlas + ')',
    backgroundPosition: '0 -46px',
    width:'54px',
    height:'46px',
    overflow:'hidden'
    }; 

var ala_izq = {
    backgroundImage: 'url(' + atlas + ')',
    backgroundPosition: '47px -14px',
    width:'54px',
    height:'46px',
    marginTop:'-46px',
    marginLeft:'60px',
    overflow:'hidden'
}
    

var bloque = {
    backgroundImage: 'url(' + atlas + ')',
    backgroundPosition: '47px -64px',
    height: '60px',
    width: '46px',
    position:'absolute',
    right:'250px'
}; 

    var cuerpo = {
    backgroundImage: 'url(' + atlas + ')',
    width:'54px',
    height:'48px',
    marginLeft:'25px',
    marginTop:'-25px',
    }; 


    //console.log(this.state.numero_1)
    return (
      <div className="canvas">
        <div className={this.state.desplazar} style={personaje}>
         <div className="animate-right" style={ala_der}>
         </div>

           <div className="animate-left"  style={ala_izq}>
         </div>

          <div style={cuerpo}>
         </div>

         <button className="btn waves-effect waves-light" id="mover" name="mover" onClick={this.navOpen.bind(this)}>Press me</button>
   
         </div>
          <div style={bloque}>
         </div>
      </div>
 

    );
  }
}

export default Game;
