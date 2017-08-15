import {FILTER_NAME} from '../actions'

export  function filterName(state={},action){
    if (action.type===FILTER_NAME){
        return action.filter
    }
    return state
}