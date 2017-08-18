import {updateHistory}from'./actions'

export function getSocketMsg(dispatch){

io.connect().on('message',(msg)=>{
    let objData = JSON.parse(msg)
    switch(objData.action){
        case 'add_msg':
            dispatch(updateHistory({
                author:objData.author,
                msg:objData.msg,
                data:objData.data,
                frendy:objData.frendy
            }))
            break;
        case 'update_ppl':  
            function ear(){
                let user = app_model.people.get_user()
                    if(user.id==undefined)setTimeout(()=>ear(),1000) 
                    else{
                        if(user.id!=objData._id&&user.id!='a0'){
                            app_model.get_pplList(objData.people)
                            let array=[],
                                ppls = app_model.people.get_db() 
                            ppls().each(person=>array.push(person))
                            store.dispatch(getListPpl(array))  
                        }
                    }
            }//ear()
                break;
    }
})
}