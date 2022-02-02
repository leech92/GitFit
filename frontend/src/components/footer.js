import React from 'react';
import "../stylesheets/footer.css";

const Footer = () => {
    return (
        <div className='footer'> 
            <div className='footer-tech'> 
                <h1>Technology</h1>
                <p>MongoDB</p>
                <p>Express</p>
                <p>React</p>
                <p>NodeJs</p>
                <p>AWS</p>
                <p>Google Maps API</p>
            </div>

            <div className='footer-peers'>
                <h1>WORK WITH ME </h1>
                <p>Tashi Sangpo, Assistant Janitor, Fearless Leader</p>
                <p>Marco Countryman, Director of Design and Aquisitions</p>
                <p>Anna Trott-Herdrich, President of NA Engineering</p>
                <p>Christian Lee, Head of Product Testing and Development</p>
            </div>

            <div className='footer-connect'> CONNECT
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className='socials'> 
                    <h1>Tashi Sangpo</h1>
                    <div>
                        <a href="" target="_blank" className="fa fa-linkedin"></a>
                        <a href="" target="_blank" className="fa fa-github"></a>
                        <a href="" target="_blank" className="fa fa-instagram">
                        </a>
                    </div>
                    
                </div>
                <div className='socials'> 
                    <h1>Marco Countryman</h1>
                    <div>   
                        <a href="" target="_blank" className="fa fa-linkedin"></a>
                        <a href="" target="_blank" className="fa fa-github"></a>
                        <a href="" target="_blank" className="fa fa-instagram">
                        </a>
                    </div>
                    
                </div>
                <div className='socials'> 
                    <h1>Anna Trott-Herdrich</h1>
                    <div>
                        <a href="https://www.linkedin.com/in/annatrottherdrich/" target="_blank" className="fa fa-linkedin"></a>
                        <a href="https://github.com/AnnaYTH" target="_blank" className="fa fa-github"></a>
                        <a href="https://www.instagram.com/roaringdragonite/?hl=en" target="_blank" className="fa fa-instagram">
                        </a>
                    </div>
                    
                </div>
                <div className='socials'> 
                    <h1>Christian Lee</h1>
                    <div>
                        <a href="https://www.linkedin.com/in/christianlee92/" target="_blank" className="fa fa-linkedin"></a>
                        <a href="https://github.com/leech92" target="_blank" className="fa fa-github"></a>
                        <a href="https://angel.co/u/christian-lee-17" target="_blank" className="fa fa-instagram">
                        </a>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Footer; 