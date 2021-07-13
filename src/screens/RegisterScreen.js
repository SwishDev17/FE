import React from 'react'
import About from '../components/About'

function RegisterScreen() {
    return (
        <div className="topnav">
        <span className="detailP">
            <a href="/titipdonasi">Daftar Agenpeduli</a>
        </span>
        <div className="container-reg">
            <About/>
            <input
          className="txtRegName"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Nama Lengkap"
        />

<input
          className="txtRegEmail"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Email"
        />

<input
          className="txtRegNo"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Nomor WhatsApp"
        />

        <input
          className="txtRegCity"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Kota Tempat Tinggal"
        />

        <button class="btnReg">Daftar Menjadi AgenPeduli</button>
        <p className="atau">Atau</p>
        <button class="btnAsk">Tanya Cs Danapeduli</button>
        </div>
      </div>
    )
}

export default RegisterScreen
