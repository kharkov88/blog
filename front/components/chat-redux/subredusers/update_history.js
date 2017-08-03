import {UPDATE_HISTORY}from'../actions'

export default function update(state=[],action){
    if(action.type=='UPDATE_HISTORY'){
        return {
            date:action.date
            }
    }
    return state
}