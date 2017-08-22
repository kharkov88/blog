import React from 'react'
import {Point}from'./points'

let img = ['img/img1.jpg','img/img2.jpg','img/img3.jpg']
let count = 1;
export class App extends React.Component{
    constructor(){
        super()
        this.state = {
            image:img[0],
            click:false,
            moving:true
        }
        this.clickPoint = this.clickPoint.bind(this)
    }
    ear(){
        setTimeout(()=>{
            if(!this.state.click){
            count>2?count=1:count++
            this.setState({image:`img/img${count}.jpg`})
            }
            this.ear()   
        },2000)
    }
    componentDidMount(){
        this.ear()
    }
    clickPoint(img){
        this.setState({
            click:true,
            image:img,
            moving:false
        })
    }
    imgLeave(){
        this.setState({
            click:false
        })
    }
    render(){
        return(
            <div>
                <div className="app-bg-image"  onMouseLeave={this.imgLeave.bind(this)}>
                    <img src={this.state.image}/>
                    <div className="app-points">
                        <Point img={img[0]} callback={this.clickPoint}>
                            <div></div>
                        </Point>
                        <Point img={img[1]} callback={this.clickPoint}>
                            <div>
                            </div>
                        </Point>
                        <Point img={img[2]} callback={this.clickPoint}>
                            <div>
                            </div>
                        </Point>
                    </div>
                </div> 
            </div>
        )
    }
}