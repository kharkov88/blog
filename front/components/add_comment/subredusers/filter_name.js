import {FILTER_NAME} from '../actions'

export default function filterName(state='value',action){
    if (action.type===FILTER_NAME){
        return action.filter
    }
    return state
}