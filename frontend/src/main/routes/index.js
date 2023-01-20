import { Route, Routes } from "react-router-dom"

import Home from '../components/Home/Home'
import Summoner from '../components/Summoner/Summoner'

export default function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/summoner/:id' element={<Summoner />} />
        </Routes>
    )
}