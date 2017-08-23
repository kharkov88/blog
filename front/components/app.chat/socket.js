import {updateHistory}from'./actions'

export function getSocketMsg(dispatch){
// let socket = io.connect('/');
// socket.on('connect',()=>{
//     socket.json.send({"action":"newUser","user":"new_user"})
//     socket.on('message',(msg)=>{
//         let objData = JSON.parse(msg)
//         switch(objData.action){
//             case 'connected':
//                 dispatch(updateHistory({
//                     author:'',
//                     msg:'Соединение успешно...',
//                     data:objData.data
//                 }))
//                 break;
//             case 'leave':
//                 dispatch(updateHistory({
//                     author:'',
//                     msg:'Вышел...',
//                     data:objData.data
//                 }))
//                 break;
//             case 'user_joined':
//                 dispatch(updateHistory({
//                     author:'',
//                     msg:`К нам присоединился ${objData.user}`,
//                     data:''
//                 }))
//                 break;
//             case 'add_msg':
//                 dispatch(updateHistory({
//                     author:objData.author,
//                     msg:objData.msg,
//                     data:objData.data,
//                     frendy:objData.frendy
//                 }))
//                 break;
//         }
//     })
// })

}