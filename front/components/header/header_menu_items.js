import * as React from'react'
import {Link}from'react-router-dom'

export class Li extends React.Component{
    componentWillUnmount(){
        console.log('unmout')
    }
    componentDidMount(){
        console.log('mount')
    }
    render(){
        let{index}=this.props
        return(
            <li>
                <Link to={"/"+this.props.item} className={`${this.props.item} topmenu-link`} 
                onClick={()=>{
                    $('.main-content-flash').show().delay(500).fadeOut(300,()=>{$('.flash-man').css({"background-color":'yellow'})});
                    $('.flash-man').css({"background-color":'#fff'})
                    }}>
                {this.props.item}
                </Link> 
            </li>
        )
    }
}