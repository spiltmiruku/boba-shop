import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Landing from './Components/Landing';
import Location from './Components/Location';
import Menu from './Components/Menu';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/location' component={Location} />
        <Route path='/menu' component={Menu} />
    </Switch>
)