import * as React from'react'

export class Li extends React.Component{
    render(){
        let{changeContent,index}=this.props
        return(
            <li>
            <span onClick={()=>changeContent(index)}>{this.props.item}</span> 
            </li>
        )
    }
}