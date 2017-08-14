let app_data = (function(){
    let login,logout,chathistory;
    login = (name,callback)=>{
        return (
            new Promise((resolve,reject)=>{
            //let data; 
            fetch('/autorization',{
                method:'post',
                headers: {"Content-type": 'application/json; charset=utf-8'},
                body: JSON.stringify({name:name})
            })
            .then(response=>{
               response.json().then(data=>{
                   callback([JSON.parse(data).user])
                   resolve(JSON.parse(data).people)
                })
            })
            .catch(error=>console.log('failed...'+error))                        
            }))
    }
    logout = (id)=>{
            fetch('/logout',{method:'post',headers: {  
                 "Content-type": 'application/json; charset=utf-8'},
                body: JSON.stringify({id:id})})
            .then(response=>{
            })
            .catch(error=>console.log('failed...'+error))  
    }
    chathistory = ()=>{
        
    }
    return {
        login,
        logout,
        chathistory
    }
}())

export default app_data