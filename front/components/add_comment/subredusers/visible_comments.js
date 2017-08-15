import {VISIBLE} from '../actions'

export  function toggleVis(state=false,action){
    if (action.type===VISIBLE){
        return !state
    }
    return state
}