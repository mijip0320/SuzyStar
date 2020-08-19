import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Header from "./Header"

@inject("MainStore")
@observer
class HeaderContainer extends Component {
    setView = (view)=>{
        console.log(view);
        this.props.MainStore.setMainView(view);
    }
    render() {
        return (
            <Header setView={this.setView}/>
        );
    }
}

export default HeaderContainer;