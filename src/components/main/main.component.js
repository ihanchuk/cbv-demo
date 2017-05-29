import React from 'react';
import store from '../../store/store';
import {connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) =>{
    return{
        main: state
    };
}

const MainComponent = (props)=>{
    console.log(props);
    return (<h1>Main Component</h1>);
}

export default withRouter (connect(mapStateToProps)(MainComponent));