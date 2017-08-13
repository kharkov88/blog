import React from 'react'
import {connect}from'react-redux'
import ShowComments from'../containers/showComments'
import InputForm from '../containers/inputForm'
import {clearComments,addComment}from'../actions'
class App extends React.Component{
    componentDidMount(){
        fetch('/basecomment',{
            method:'post',
            headers:{"Content-type": 'application/json; charset=utf-8'}
        })
        .then(response=>{
            response.json().then(data=>{
                let answer = JSON.parse(data)
                this.props.dispatch(clearComments())
                answer.map(item=>this.props.dispatch(addComment(item.author,item.comment,item.date)))
            })          
        })
    }
    render(){
    return (
        <div>
            <InputForm/>
            <ShowComments/>
        </div>
    )
}}
App = connect()(App)
export default App