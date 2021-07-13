import React from 'react'
import p1 from '../assets/program1.svg';
import { ReactComponent as Share } from '../assets/share.svg';
import Detail from '../components/Detail';
import PenerimaDana from '../components/PenerimaDana';
import ListDonatur from '../components/ListDonatur';

function DetailProgramScreen() {
    return (
        
        <div className="container-detail">
            
        <img src={p1} alt="p2" />
        <p className="titleP2">Selamatkan Anak Terlantar di Desa Rawageni</p>
        <div className="value2">
          <p className="txtValue2">Target Donasi Tersalurkan</p>
          <p className="txtTot2">Rp 98.631.944</p>
        </div>
        
        <div className="container-card2">
        <div className="card-dtl">
      <p className="title-dtl">Total Donasi / Sedekah Terkumpul</p>
      <p className="idr-dtl">Rp. 200.000.000,-</p>
      <form>
        <input
          className="txtNominal-dtl"
          type="text"
          id="fname"
          name="firstname"
          placeholder="RP |"
        />

        <input
          className="nom1-dtl"
          type="text"
          id="f5k"
          name="idr5"
          placeholder="5.000"
        />

        <input
          className="nom2-dtl"
          type="text"
          id="f50k"
          name="idr50"
          placeholder="50.000"
        />

        <input
          className="nom3-dtl"
          type="text"
          id="f100k"
          name="idr100"
          placeholder="100.000"
        />

        <select id="mPayment" name="mPayment" className="metodP-dtl">
          <option value="Ovo">OVO</option>
          <option value="GoPay">GoPay</option>
        </select>

        <input
          className="txtName-dtl"
          type="text"
          id="fname"
          name="fullname"
          placeholder="Nama Lengkap"
        />
        <input
          className="txtEmail-dtl"
          type="text"
          id="femail"
          name="email"
          placeholder="Email"
        />

        <p className="identity-dtl">Sembunyikan identitas (Hamba Allah)</p>
        <label className="switch-dtl">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <button className="btnDonate-dtl">Donasi</button>
        <button className="btnShare-dtl">
            <Share className='logo-share'/>
        </button>
      </form>
        </div>
        </div>
        
        <Detail/>
        <div className="sekat">
        <PenerimaDana/>
        </div>
        
        <div className="sekat2">
        <p>Donatur Terbaru</p>
        <ListDonatur/>
        </div>
        
      </div>
        
    )
}

export default DetailProgramScreen
