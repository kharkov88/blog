let app_data = (function(){
    let login,logout,initModule;
    login = (callback)=>{
        return (
            new Promise((resolve,reject)=>{
            let data; 
            fetch('autorization',{method:'post',headers: {  
                 "Content-type": 'application/json; charset=utf-8'},
                body: JSON.stringify({name:name})})
            .then(response=>{
               response.json().then(data=>{
                   console.log(data)
                   callback([JSON.parse(data).user])
                   resolve(JSON.parse(data).people)
                })
            })
            .catch(error=>console.log('failed...'+error))                        
            }))
    }
    logout = (id)=>{
            fetch('logout',{method:'post',headers: {  
                 "Content-type": 'application/json; charset=utf-8'},
                body: JSON.stringify({id:id})})
            .then(response=>{
            })
            .catch(error=>console.log('failed...'+error))  
    }
    return {
        login,
        logout
    }
}())

export default app_data