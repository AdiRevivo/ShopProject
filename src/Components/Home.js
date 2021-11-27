
import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import History from '../Components/AboutPage/History'
import About from '../Components/AboutPage/About'
import Reason from '../Components/AboutPage/Reason'
import Login from '../Components/Login'
import Products from '../Components/Products'
import Buy from './Buy'
import Payment from '../Components/Payment'

export default function Home(props) {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/About">About</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/Login">כניסה</Link>
                            <Link class="nav-link active" aria-current="page" to="/Products">רשימת מוצרים</Link>
                            <Link class="nav-link active" aria-current="page" to="/Buy">רשימת קניות</Link>
                            <Link class="nav-link active" aria-current="page" to="/Payment">דף תשלום</Link>

                        </div>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route path='/Products'>
                    <Products />
                </Route>

                <Route path='/Login'>
                    <Login />
                </Route>

                <Route path='/Reason'>
                    <Reason />
                </Route>
                <Route path='/Buy'>
                    <Buy />
                </Route>
                <Route path='/Payment'>
                    <Payment />
                </Route>
            </Switch>
        </>

    )
}

