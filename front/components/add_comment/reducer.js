
import {changeComments,filterName,toggleVis,fetchStatus}  from'./subredusers'

export function reducer(state={},action){
    return (
        {
            comments:changeComments(state.comments,action),
            filter:filterName(state.filter,action),
            visible:toggleVis(state.visible,action),
            fetching:fetchStatus(state.fetching,action)
        }
    )
}