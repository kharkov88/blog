import * as React from'react'

export class Li extends React.Component{
    render(){
        let{changeContent,index}=this.props
        return(
            <li onClick={()=>{
            changeContent(index)
            }}>
            <a>{this.props.item}</a></li>
        )
    }
}