import React, { Component } from 'react';


class Micomponente extends Component {

constructor(props){
  super(props)
  
}


  render() {

    //console.log(this.state.numero_1)
    return (
      <div className="">
    { /*     Mi componente:  {this.props.estado_1}
        <button className="btn waves-effect waves-light" id="boton_prueba" name="PRUEBA" onClick={this.props.fun_suma}>Mi componente hijo</button>
      */
    }
      <table>
        <thead>
          <tr>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Precio</th>
          </tr>
        </thead>

        <tbody>
      
         
          {this.props.listado.map((empleado, i) => 
           <tr key={i}>
                     <td>{empleado.codigo_detalle}</td>
                     <td>{empleado.nombre_detalle}</td>
                     <td>{empleado.precio_detalle}</td>
                     
           </tr>          
          )}
          
      
        </tbody>
      </table>
     
      </div>
 

    );
  }
}

export default Micomponente;
