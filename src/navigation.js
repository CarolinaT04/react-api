import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router , Route , Link}  from 'react-router-dom';


function NavigationBar() {

    return (
        <Router>
        <Menu pointing secondary>
            <Menu.Item icon= "home" name='home'     href="/"/>
            <Menu.Item icon= "play" name='episodes' href="/episodes"/>
            <Menu.Item  icon="box"  name='deaths'   href="/deaths"/>
        </Menu>
        
       
        </Router>
    )
}

export default NavigationBar;