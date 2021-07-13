import React from 'react'
import { ReactComponent as Share } from '../assets/share.svg';
import '../css/formdonasi.css'
function FormDonasi() {
    return (
            <div className="card">
      <p className="title">Total Donasi / Sedekah Terkumpul</p>
      <p className="idr">Rp. 200.000.000,-</p>
      <form>
        <input
          className="txtNominal"
          type="text"
          id="fname"
          name="firstname"
          placeholder="RP |"
        />

        <input
          className="nom1"
          type="text"
          id="f5k"
          name="idr5"
          placeholder="5.000"
        />

        <input
          className="nom2"
          type="text"
          id="f50k"
          name="idr50"
          placeholder="50.000"
        />

        <input
          className="nom3"
          type="text"
          id="f100k"
          name="idr100"
          placeholder="100.000"
        />

        <select id="mPayment" name="mPayment" className="metodP">
          <option value="Ovo">OVO</option>
          <option value="GoPay">GoPay</option>
        </select>

        <input
          className="txtName"
          type="text"
          id="fname"
          name="fullname"
          placeholder="Nama Lengkap"
        />
        <input
          className="txtEmail"
          type="text"
          id="femail"
          name="email"
          placeholder="Email"
        />

        <p className="identity">Sembunyikan identitas (Hamba Allah)</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <button class="btnDonate">Donasi</button>
        <button class="btnShare">
            <Share className='logo-share'/>
        </button>
      </form>
        </div>
    )
}

export default FormDonasi
