import {connect}from'react-redux'
import {Login} from'../components'

const getProps = function(state) {
    return{
        dispatch:state.dispatch
    }
};
export let ConnectLogin=connect(getProps)(Login)