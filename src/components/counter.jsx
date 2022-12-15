import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div >
            <h2>{counter}</h2>
            <div className="jumbotron">
                <button onClick={dec }
                    className="btn btn-primary btn-large">DEC</button>
                <button onClick={inc}
                    className="btn btn-primary btn-large">INC</button>
                <button onClick={rnd}
                    className="btn btn-primary btn-large">RND</button>
            </div>
      </div>  
    );
}

const mapStateToProps = (state) => {
    return {counter: state}
}

// const mapDispatchToProps = (dispatch) => {
//     const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
//     return {
//         inc,
//         dec,
//         rnd 
//     }
// }

export default connect(mapStateToProps, actions)(Counter);
