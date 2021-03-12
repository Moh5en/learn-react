import React, { Component } from 'react';



class Showname extends React.Component {
    render() {
      return <h2 style={{color: this.props.color}}>{this.props.name}</h2>;
    }
  }
  export default Showname;