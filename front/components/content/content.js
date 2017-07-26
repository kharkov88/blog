import * as React from'react'
import './content.css'
export let Content = ({content})=>{
    return  <div className="content container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-xs-12">
                        sidebar
                    </div>
                    <div className="col-md-10 col-sm-12 col-sx-12">
                       {content()}
                    </div>
                </div>
            </div>
}