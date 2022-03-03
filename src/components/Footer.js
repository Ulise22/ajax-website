import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
        <div className='footer'>
        <div className='space'></div>
        <section className='media'>
            <h3>Segui al Fc Ajax en todas sus redes sociales</h3>
            <div className='social-media'>
                <a href="https://twitter.com/afcajax" className='real'>
                    <i className="fab fa-twitter fa-2x" />
                </a>
    
                <a href="https://www.facebook.com/afcajax" className='real'>
                    <i className="fab fa-facebook fa-2x" />
                </a>
    
                <a href="https://www.instagram.com/afcajax/" className='real'>
                    <i className="fab fa-instagram fa-2x" />
                </a>
    
                <a href="https://www.tiktok.com/@afcajax" className='real'>
                    <i className="fab fa-tiktok fa-2x" />
                </a>
    
                <a href="https://www.youtube.com/afcajax" className='real'>
                    <i className="fab fa-youtube fa-2x" />
                </a>
            </div>
        </section>
  
          <div className='players-container'>
            <div className='players'>
              <h4>Porteros</h4>
  
              <a href='/players/page3'>André Onana</a>
              <a href='/players'>Jay Gorter</a>
              <a href='/players/page4'>Marteen Stekelemburg</a>
              <a href='/players'>Remko Pasveer</a>
            </div>
  
            <div className='players'>
              <h4>Defensas</h4>
  
              <a href='/players/page2'>Lisandro Martínez</a>
              <a href='/players/page3'>Jurrier Timber</a>
              <a href='/players/page2'>Perr Schuurs</a>
              <a href='/players/page3'>Nicolás Tagliafico</a>
              <a href='/players'>Daley Blind</a>
              <a href='/players/page2'>Noussair Mazraoui</a>
              <a href='/players/page4'>Devyne Rensch</a>
              <a href='/players/page4'>Sean Klaiber</a>
            </div>
  
            <div className='players'>
              <h4>Mediocentros</h4>
  
              <a href='/players/page4'>Edson Álvarez</a>
              <a href='/players/page2'>Ryan Gravenberch</a>
              <a href='/players/page5'>Mohammed Kudus</a>
              <a href='/players/page3'>Kenneth Taylor</a>
              <a href='/players/page4'>Davy Klaassen</a>
              <a href='/players'>Steven Berghuis</a>
              <a href='/players/page2'>Zakaria Labyad</a>
            </div>
  
            <div className='players'>
              <h4>Delanteros</h4>
  
              <a href='/players'>Dusan Tadic</a>
              <a href='/players/page5'>Mohamed Daramy</a>
              <a href='/players/page3'>Antony</a>
              <a href='/players/page5'>Sébastian Haller</a>
              <a href='/players/page5'>Danilo Pereira</a>
            </div>
          </div>
          
        </div>
      </div>
    )
}