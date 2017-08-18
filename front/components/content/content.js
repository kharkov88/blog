import * as React from'react'
import {Sidebar,Main,AppComment,Chat,World} from'../'
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
                        <Route exact path="/mvc" component={()=>
                            <div>
                                <img src="contents/mvc.png" style={{width:'100%'}}/>
                            </div>
                        }/>
                        <Route exact path="/spa" component={()=>
                            <div>
                                <img src="contents/spa.JPG" style={{width:'100%'}}/>
                            </div>
                        }/>
                        <Route exact path="/flux" component={()=>
                            <div>
                                <img src="contents/flux.png" style={{width:'100%'}}/>
                            </div>
                        }/>
                        <Route exact path="/comment" component={AppComment}/> 
                        <Route exact path="/logout" component={Main}/>
                    </div>
                </div>
            </div>
}