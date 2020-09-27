import React from "react";

export const withAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component{
        render() {
            return <Component {...this.props}/>
        }
    }
    return RedirectComponent
}