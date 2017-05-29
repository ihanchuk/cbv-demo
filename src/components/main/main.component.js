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

export default withRouter (connect(mapStateToProps)(MainComponent));