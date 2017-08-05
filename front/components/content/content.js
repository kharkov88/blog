import * as React from'react'
import {Sidebar} from'../sidebar'
import {Route}from'react-router-dom'
import {Main}from'../main'
import {Login}from'../login'
import {AppComment}from'../add_comment'

import './content.css'

export let Content = ({content=()=>{}})=>{
    return  <div className="content container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-xs-12">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10 col-sm-12 col-sx-12 main-content">
                        <Route exact path="/" component={()=><p/>}/>
                        <Route exact path="/main" component={Main}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/contact" component={()=><p/>}/>
                        <Route exact path="/comment" component={AppComment}/> 
                    </div>
                </div>
            </div>
}