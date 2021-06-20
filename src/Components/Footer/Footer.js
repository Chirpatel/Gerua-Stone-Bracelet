import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-part1">
                    <div className="footer-part1-details"><i class="fas fa-phone-alt"></i> +919426240792</div>
                    <div className="footer-part1-details"><i class="fas fa-envelope"></i> gopientriprise23@yahoo.com</div>
                    <div className="footer-part1-details"><i class="far fa-clock"></i> Mon-Sat 9:00AM-8:00PM</div>
                </div>
                <div className="footer-part2">
                    <div className="footer-part2-company">
                        <div className="footer-part2-logo">
                            <img src="/logo.png" alt="Logo"/>
                        </div>
                        <div className="footer-part2-desp">
                            We are dedicated to develop amazing bracelets.
                        </div>
                        <div className="footer-part2-cont">
                            Gopi Enterprise, Morbi. 
                        </div>
                    </div>
                    <div className="footer-part2-details">
                        <div className="footer-part2-sign">SIGN UP FOR UPDATES</div>
                        <div className="footer-part2-email">
                            <input type="text" placeholder="Your email address"/>
                            <div className="footer-part2-send"><i class="fas fa-paper-plane"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
