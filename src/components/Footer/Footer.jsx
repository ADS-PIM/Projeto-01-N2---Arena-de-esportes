import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">

        <div className="footer-content">

          <img src="/logo.png" alt="" className="footer-logo"/>

          <div className="footer-info">

            <p>© 2026 Arena Brisa</p>

            <span className="privacy">
              Privacidade e dados
            </span>

            <p className="slogan">
              FEITA PARA O SEU MOVIMENTO
            </p>


          </div>


        </div>

    </div>
  )
}

export default Footer