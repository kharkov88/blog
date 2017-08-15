import {GET_REQUEST,GET_COMMENTS} from '../actions'

export  function fetchStatus(state=false,action){
    switch(action.type){
        case GET_REQUEST:
            GET_COMMENTS:
        return !state
        default: return state
    }
}