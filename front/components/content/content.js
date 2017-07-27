import * as React from'react'
import {Sidebar} from'../sidebar'
import {Route}from'react-router-dom'

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
                        <Route exact path="/" component={componentsOfMenu[0]}/>
                       <Route exact path="/main" component={componentsOfMenu[0]}/>
                       <Route exact path="/gallery" component={componentsOfMenu[1]}/>
                       <Route exact path="/contact" component={componentsOfMenu[2]}/>
                       <Route exact path="/coments" component={componentsOfMenu[3]}/> 
                    </div>
                </div>
            </div>
}