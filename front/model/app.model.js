import app_fake from'./app.fake'
'use strict'

let app_model = (function(){
    let configMap = {anon_id:'a0'},
        stateMap = {
            anon_user:null,
            cid_serial:0,
            people_cid_map:{},
            people_db:TAFFY(),
            user:null
        },
        people,chat,get_pplList,makePerson,makeCid, clearPeopleDb, completeLogin,removePerson,initModule;

    makeCid = ()=>'c'+String(stateMap.cid_serial++)
    clearPeopleDb = ()=>{
        let user = stateMap.user;
        stateMap.people_db = TAFFY();
        stateMap.people_cid_map = {};
        if(user){
            stateMap.people_db.insert(user)
            stateMap.people_cid_map[user.cid]=user
        }
    }
    get_pplList = ()=>{
        let peopleList
        peopleList = app_fake.getPeopleList()
        peopleList.map(item=>
            makePerson({
                cid     : item._id,
                css_map : item.css_map,
                id      : item._id,
                name    : item.name
            })            
        )
    }
    completeLogin = (user_list)=>{
        let user_map = user_list[0];
        delete stateMap.people_cid_map[user_map.cid]
        stateMap.user.cid     = user_map._id;
        stateMap.user.id      = user_map._id; 
        stateMap.user.css_map = user_map.css_map;
        stateMap.people_cid_map[user_map._id] = stateMap.user;
    }
    class Person {
        constructor(person_map){
            this.cid     = person_map.cid,
            this.css_map = person_map.css_map,
            this.id      = person_map.id,
            this.selected= false,
            this.name    = person_map.name;
        }
        get_is_user(){
            return this.cid===stateMap.user.cid
        }
        get_is_anonim(){
            return this.cid===stateMap.anon_user.cid
        }
    }
    makePerson = (person)=>{
        let obj = new Person(person);
        stateMap.people_cid_map[obj.cid]=obj;
        stateMap.people_db.insert(obj);
        return obj;
    }
    removePerson = (person)=>{
        if(!person||person.id===configMap.anon_id){return false;}
        stateMap.people_db({cid:person.cid}).remove();
        if(person.cid){delete stateMap.people_cid_map[person.cid]}
        return true;
    }
    people = (function(){
        let get_by_cid, get_db, get_user, login, logout;
        get_by_cid = cid => stateMap.people_cid_map[cid];
        get_db = ()=> stateMap.people_db;
        get_user = ()=> stateMap.user;

        login = name => {
            let sio = app_fake.mockSio;
            stateMap.user = makePerson({
                cid :makeCid(),
                css_map :{top : 25, left : 25, 'background-color':'#8f8'},
                name:name
            });
            sio.on( 'userupdate', completeLogin );
            sio.emit( 'adduser', { 
                cid     : stateMap.user.cid,
                css_map : stateMap.user.css_map,
                name    : stateMap.user.name
            })
         }
        logout = ()=>{
            clearPeopleDb()
            let is_removed,user = stateMap.user;
            is_removed = removePerson(user);
            stateMap.user = stateMap.anon_user;
            makePerson(stateMap.user)
            return is_removed;
        }
        return{
            get_by_cid : get_by_cid,
            get_db     : get_db,
            get_user   : get_user,
            login      : login,
            logout     : logout            
        }

    }())

    chat = (function(){
        let _update_list,_leave_chat,_join_chat,send_msg,frend_for_chatee;
        frend_for_chatee = {
            id :'',
            name:''
        }
        //update UI chat list of ppl
        _update_list = (arg_list)=>{
            let i,person_map,make_person_map,people_list=arg_list[0]
            clearPeopleDb()
            PERSON:
                for(i=0;i<people_list.length;i++){
                    person_map = people_list[i];
                    if(!person_map.name){continue PERSON;}
                    if ( stateMap.user && stateMap.user.id === person_map._id ) {
                        stateMap.user.css_map = person_map.css_map
                        continue PERSON;
                        }
                    make_person_map = { 
                        cid     : person_map._id,
                        css_map : person_map.css_map,
                        id      : person_map._id,
                        name    : person_map.name
                }
                makePerson( make_person_map )
                stateMap.people_db.sort('name')
                }

        }
        _leave_chat = ()=>{
            let sio = app_fake.mockSio;
            stateMap.is_connected = false;
            sio.emit('leavechat')
        }
        send_msg = (data)=>{
            let msg_map;
            msg_map = {
                dest_id : data.frend.id,
                dest_name :data.frend.name,
                sender_id :data.user.id,
                message : data.message
            }
            return app_fake.mockSio.updateChat(msg_map)
             app_fake.fake_store
        }
        return {
            _leave:_leave_chat,
            join:_join_chat,
            send_msg
        }
    }())

    initModule = ()=>{
        let peopleList,personMap;
        stateMap.anon_user = makePerson({
            cid  : configMap.anon_id,
            id   : configMap.anon_id,
            name : 'anonymous'           
        })
        stateMap.user = stateMap.anon_user;

    }
    return {
        initModule,
        get_pplList,
        chat,
        people
    }
}())
export default app_model;