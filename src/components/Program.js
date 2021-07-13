import React from 'react'
import p1 from '../assets/program1.svg';
import '../css/program.css'

function Program() {
    return (
        <div className="container-program">
      <img  src={p1} alt="p1" />
      <a href="/detailprogram" className="titleP">Selamatkan Anak Terlantar di Desa Rawageni</a>
      <div className="value">
        <p className="txtValue">Target Donasi Tersalurkan</p>
        <p className="txtTot">Rp 98.631.944</p>
      </div>

      <div className="container-program2">
        <img src={p1} alt="p2" />
        <p className="titleP2">Selamatkan Anak Terlantar di Desa Rawageni</p>
        <div className="value2">
          <p className="txtValue2">Target Donasi Tersalurkan</p>
          <p className="txtTot2">Rp 98.631.944</p>
        </div>
      </div>

      <div className="container-program3">
        <img src={p1} alt="p3" />
        <p className="titleP3">Selamatkan Anak Terlantar di Desa Rawageni</p>
        <div className="value3">
          <p className="txtValue3">Target Donasi Tersalurkan</p>
          <p className="txtTot3">Rp 98.631.944</p>
        </div>
      </div>
    </div>
    )
}

export default Program
