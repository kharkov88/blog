import React from 'react'
import {connect}from'react-redux'
import Comments from'../containers/connectList'
import Form from '../containers/connectForm'
import {clearComments,addComment}from'../actions'

class App extends React.Component{
    componentWillMount(){
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
            <Form/>
            <Comments/>
        </div>
    )
}}
App = connect()(App)
export default App