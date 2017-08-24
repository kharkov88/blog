import * as React from'react'
import "./sidebar.css"

export const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <div className="row stack">
                <div className="col-md-12 col-sm-2 col-xs-6"><a  onClick={()=>{
                    _gaq.push(['_trackEvent', 'Button_github', ' click']);
                    ga('send', 'event', 'Button_github', 'click ')
                    }
                    } href="https://github.com/kharkov88/other" target='_blank'>github</a></div>

                <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/html.png" className="img-round" alt="Cinque Terre" width="80" height="80"/>
                </div>
                <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/css.png" className="img-round" alt="Cinque Terre" width="80" height="80"/>
                </div>
                <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/js.png" className="img-round" alt="Cinque Terre" width="80" height="80"/>
                </div> 
                <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/react.png" className="img-round" alt="Cinque Terre" width="80" height="80"/>
                </div>
                <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/redux.png" className="img-round" alt="Cinque Terre" width="80" height="80"/>
                </div>
                <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/jquery.png" className="img-round" alt="Cinque Terre" width="80" height="80"/>
                </div>
                <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/node.png" className="img-round" alt="Cinque Terre" width="80" height="80"/>
                </div>
                {/* <div className="col-md-12 col-sm-2 col-xs-6">
                    <img src="contents/git.png" className="img-round" alt="Cinque Terre" width="80" height="80"/>
                </div> */}
            </div>
        </div>
    )
}
