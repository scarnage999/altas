import React, { Component } from 'react';


class Login extends Component {

constructor(props){
  super(props)
  this.state = { caja: document.getElementById('icon_prefix') }
  this.cambio_estado = this.cambio_estado.bind(this)
  
}

cambio_estado(event){
  this.setState({caja:event.target.value})

}

  render() {

    //console.log(this.state.numero_1)
    return (  
    <div className="row">
        <form className="col s12">
          <h5>{this.state.caja}</h5>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" className="validate" onChange={this.cambio_estado} />
              <label htmlFor="icon_prefix">
                    First Name
              </label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">phone</i>
              <input id="icon_telephone" type="tel" className="validate" />
              <label htmlFor="icon_telephone">Telephone</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
