import React from 'react'
import About from '../components/About'
import FormDonasi from '../components/FormDonasi'
import ListDonatur from '../components/ListDonatur'
import Program from '../components/Program'

function BerandaScreen() {
    return (
        <div className="container">
            <FormDonasi/>
            <About/>
        <div className="donater">
          <p>Donatur Terbaru</p>
          <ListDonatur/>
        </div>
        <div className="list-program">
        <p>Program Danapeduli</p>
        <Program/>
        </div>
        </div>
    )
}

export default BerandaScreen
