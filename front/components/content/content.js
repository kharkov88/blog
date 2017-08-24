import * as React from'react'
import {Sidebar,Main,AppComment,Chat,AppSlider} from'../'
import {Route}from'react-router-dom'
import {arr}from'./data'
import './content.css'

let Mvc = ()=>
    <div>
        <p>{arr[0].text}</p>
        <div className="col-md-2 col-sm-12 col-sx-12"/>
        <div className="col-md-8 col-sm-12 col-sx-12">
            <img src="contents/mvc.svg" style={{width:'100%'}}/>
        </div>
    </div>
export let Content = ({content=()=>{}})=>{
    return  <div className="content container-flux">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-xs-12 left-sidebar">
                        <div className="flash-man">
                            {/* <img src="contents/flashlight.png"/> */}
                        </div>
                        <Sidebar/>
                    </div>
                    <div className="col-md-10 col-sm-12 col-sx-12 main-content" >
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/mvc" component={Mvc}/>
                        <Route exact path="/spa" component={()=>
                            <div>
                                <p>{arr[1].text}</p>
                                <div className="col-md-2 col-sm-12 col-sx-12"/>
                                <div className="col-md-8 col-sm-12 col-sx-12">
                                    <img src="contents/spa.JPG" style={{width:'100%'}}/>
                                </div>
                            </div>
                        }/>
                        <Route exact path="/flux" component={()=>
                            <div>
                                <p>{arr[2].text}</p>
                                <div className="col-md-2 col-sm-12 col-sx-12"/>
                                <div className="col-md-8 col-sm-12 col-sx-12">
                                    <img src="contents/flux.png" style={{width:'100%'}}/>
                                </div>
                            </div>
                        }/>
                        <Route exact path="/comment" component={()=>{
                            return <div >
                                    <AppSlider/> 
                                    <AppComment/>
                                </div>
                        }}/> 
                        <Route exact path="/logout" component={Main}/>
                    </div>
                </div>
            </div>
}

