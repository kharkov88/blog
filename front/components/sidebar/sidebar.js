import * as React from'react'
import "./sidebar.css"

export const Sidebar = ()=>{
    return(
        <div>
            <div className="row stack">
                <div><h3>Мой стек:</h3></div>
                <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/html.png" className="img-rounded" alt="Cinque Terre" width="80" height="80"/>
                </div>
                <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/css.png" className="img-rounded" alt="Cinque Terre" width="80" height="80"/>
                </div>
                <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/js.png" className="img-rounded" alt="Cinque Terre" width="80" height="80"/>
                </div>
                <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/react-js.ico" className="img-rounded" alt="Cinque Terre" width="80" height="80"/>
                </div>
                <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/redux.png" className="img-rounded" alt="Cinque Terre" width="80" height="80"/>
                </div>
                <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/git.png" className="img-rounded" alt="Cinque Terre" width="80" height="80"/>
                </div>
            </div>
        </div>
    )
}