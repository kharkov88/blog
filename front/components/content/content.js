import * as React from'react'
import {Sidebar} from'../sidebar'
import {Route}from'react-router-dom'
import {Main}from'../main'
import {AppComment}from'../add_comment'

import './content.css'

const componentsOfMenu=[AppComment,()=>{return <div>contact too...</div>},AppComment]

export let Content = ({content=()=>{}})=>{
    return  <div className="content container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-xs-12">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10 col-sm-12 col-sx-12">
                        {/* {content()}  */}
                        <Route exact path="/" component={()=><p/>}/>
                       <Route exact path="/main" component={Main}/>
                       <Route exact path="/gallery" component={()=><p/>}/>
                       <Route exact path="/contact" component={()=><p/>}/>
                       <Route exact path="/coments" component={AppComment}/> 
                    </div>
                </div>
            </div>
}