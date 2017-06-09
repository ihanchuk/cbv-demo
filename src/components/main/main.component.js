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
            <ul>
            {props.main.map( (object, i) =>{
                    return <li  key={i}>{object} </li>;
            })}
            </ul>
        </div>
    );
}

export default withRouter (
    connect(mapStateToProps)(MainComponent)
    );