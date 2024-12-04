import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginView from './views/LoginView'
import Home from './components/Home'
import RegisterView from './views/RegisterView'
import AuthLayout from './layouts/AuthLayout'

export default function router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path='/auth/login' element={<LoginView />} />
                    <Route path='/auth/register' element={<RegisterView />} />
                </Route>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}