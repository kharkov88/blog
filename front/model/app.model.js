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
        people,makePerson,makeCid, clearPeopleDb, completeLogin,removePerson,initModule;

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
            let is_removed,user = stateMap.user;
            is_removed = removePerson(user);
            stateMap.user = stateMap.anon_user;
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

    initModule = ()=>{
        let peopleList,personMap;
        stateMap.anon_user = makePerson({
            cid  : configMap.anon_id,
            id   : configMap.anon_id,
            name : 'anonymous'           
        })
        stateMap.user = stateMap.anon_user;
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
    return {
        initModule,
        people
    }
}())
export default app_model;