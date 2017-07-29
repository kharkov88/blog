import * as React from'react'
import {Link}from'react-router-dom'

export class Li extends React.Component{
    render(){
        let{changeContent,index}=this.props
        return(
            <li>
                <Link to={"/"+this.props.item} onClick={()=>$('.menu').toggleClass('open')}>
                {this.props.item}
                </Link> 
            </li>
        )
    }
}