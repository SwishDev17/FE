import React from 'react'
import d1 from '../assets/d1.svg';
import d2 from '../assets/d2.svg';
import d3 from '../assets/d3.svg';
import d4 from '../assets/d4.svg';
import '../css/listdonatur.css'
function ListDonatur() {
    return (
        <div className="listDonater">
        <img src={d1} alt="Avatar" className="avatar" />
        <p className="nDonater">Hamba Allah</p>
        <p className="pDonater">Rp.20.000</p>
        <img src={d2} alt="Avatar2" className="avatar2" />
        <p className="nDonater2">Hamba Allah</p>
        <p className="pDonater2">Rp.20.000</p>
        <img src={d3} alt="Avatar3" className="avatar3" />
        <p className="nDonater3">Hamba Allah</p>
        <p className="pDonater3">Rp.20.000</p>
        <img src={d4} alt="Avatar4" className="avatar4" />
        <p className="nDonater4">Hamba Allah</p>
        <p className="pDonater4">Rp.20.000</p>
      </div>
    )
}

export default ListDonatur
