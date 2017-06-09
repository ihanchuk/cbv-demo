import React from 'react';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) =>{
    return{
        main: state.mainPage
    };
}

const MainComponent = (props)=>{
    return (
        <div>
          {props.main ? <h1>Data </h1> : <h1>Empty</h1>}
        </div>
    );
}

export default withRouter (
    connect(mapStateToProps)(MainComponent)
    );