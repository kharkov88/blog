import * as React from'react'
import {Sidebar,Main,AppComment,Chat} from'../'
import {Route}from'react-router-dom'
import './content.css'

export let Content = ({content=()=>{}})=>{
    return  <div className="content container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-xs-12">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10 col-sm-12 col-sx-12 main-content">
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/history" component={()=><div >
                            <img src="contents/story.svg" alt=""/>
                            </div>}/>
                        <Route exact path="/gallery" component={()=><p>gallery....</p>}/>
                        <Route exact path="/about" component={()=><p>about....</p>}/>
                        <Route exact path="/comment" component={AppComment}/> 
                        <Route exact path="/logout" component={Main}/>
                    </div>
                </div>
            </div>
}