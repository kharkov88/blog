
import changeComments from'./subredusers/change_comments'
import filterName from'./subredusers/filter_name'


export function reduser(state={},action){
    return (
        {
            comments:changeComments(state.comments,action),
            filter:filterName(state.filter,action)
        }
    )
}