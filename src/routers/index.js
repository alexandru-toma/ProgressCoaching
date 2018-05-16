import React from 'react'
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Blog from '../components/Blog'
import News from '../components/News'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import AboutUs from '../components/AboutUs'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/news" component={News} />
                <Route exact path="/testimonials" component={Testimonials} />
                <Route exact path="/aboutus" component={AboutUs} />
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default AppRouter;