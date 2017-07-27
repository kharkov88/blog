import * as React from'react'
import {Link}from'react-router-dom'

export class Li extends React.Component{
    render(){
        let{changeContent,index}=this.props
        return(
            <li>
                <Link to={"/"+this.props.item}>
                {/* <span onClick={()=>changeContent(index)}>{this.props.item}</span> */}
                {this.props.item}
                </Link> 
            </li>
        )
    }
}