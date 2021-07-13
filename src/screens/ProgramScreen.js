import React from 'react'
import About from '../components/About'
import Program from '../components/Program'


function ProgramScreen() {
    return (
        
            <div className="topnav">
        <span className="detailP">
            <a href="/titipdonasi">Kumpulan Program</a>
        </span>
        <div className="container-list">
            <Program/>
            
        </div>
        
      </div>
        
    )
}

export default ProgramScreen
