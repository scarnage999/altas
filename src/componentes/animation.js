import React, { Component } from 'react';
import '../css/animation.css';
import atlas from '../img/atlas.png';
import { CSSTransitionGroup } from 'react-transition-group'

class AnimateExample extends Component {

constructor(props){
  super(props)
    this.state = {numero_1 : 0}
}

    render() {

        return (
    

                <div id="container" onClick="">
                </div>


        );
    }
}

export default AnimateExample;
