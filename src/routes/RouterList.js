import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Card } from '../pages/kartu/Card'
import { SoalLatihan } from '../pages/todolist/SoalLatihan'
import { Todolist } from '../pages/todolist/Todolist'
import MovieList2 from '../pages/movie/MovieList2'
import { Register } from '../pages/auth/Register'
import { LoginPage } from '../pages/auth/LoginPage'
import { Dashboard } from '../pages/halamanRouter/Dashboard'
import { ReduxPage } from '../pages/reduxHandle/ReduxPage'
import { Responsive } from '../pages/Responsive'


export const RouterList = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Responsive/>}/>
        {/* <Route path='/' element={<ReduxPage/>}/> */}
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/Movie'element={<MovieList2/>}/>
        <Route path='/Card'element={<Card/>}/>
        <Route path='/Latihan'element={<SoalLatihan/>}/>
        <Route path='/Todolist'element={<Todolist/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

    </Routes>
    </BrowserRouter>
  )
}
