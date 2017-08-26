import * as React from'react'
import {Sidebar,Main,AppComment,Chat,AppSlider} from'../'
import {Route}from'react-router-dom'
import {arr}from'./data'
import './content.css'


function LoadRun(that){
    return new Promise((res,rej)=>{
    })
}
export class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:false
        }
    }
    render(){
    let visible = this.state.loading?'block':'none';
    return  <div className="content container-flux">
                <div className="content-before"></div>
                <div className="main-content-flash" style={{display:visible}}>
                    <img src="gifs/run.gif"/>
                </div>
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-xs-12 left-sidebar">
                        <div className="flash-man">
                             {/* <img src="gifs/source.gif"/> */}
                        </div>
                        <Sidebar/>
                    </div>
                    <div className="col-md-10 col-sm-12 col-sx-12 main-content" >
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/mvc" component={Mvc}/>
                        <Route exact path="/spa" component={Spa}/>
                        <Route exact path="/flux" component={Flux}/>
                        <Route exact path="/comment" component={()=>{
                            return <div >
                                    <AppSlider/> 
                                    <AppComment/>
                                </div>
                        }}/> 

                    </div>
                </div>
            </div>
}}

let Mvc = ()=>
    <div>
        <p>{arr[0].text}</p>
        <div className="col-md-2 col-sm-12 col-sx-12"/>
        <div className="col-md-8 col-sm-12 col-sx-12">
            <img src="contents/mvc.svg" style={{width:'100%'}}/>
        </div>
    </div>
let Spa =() =>
    <div>
        <p>{arr[1].text}</p>
        <div className="col-md-2 col-sm-12 col-sx-12"/>
        <div className="col-md-8 col-sm-12 col-sx-12">
            <img src="contents/spa.JPG" style={{width:'100%'}}/>
        </div>
    </div>

let Flux = ()=>
    <div>
        <p>{arr[2].text}</p>
        <div className="col-md-2 col-sm-12 col-sx-12"/>
        <div className="col-md-8 col-sm-12 col-sx-12">
            <img src="contents/flux.png" style={{width:'100%'}}/>
        </div>
    </div>