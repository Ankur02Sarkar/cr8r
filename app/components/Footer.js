import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="footer-container">
            <h1>CR8R</h1>
            <p>This website was bootstrapped with GatsbyJS.</p>

            <div className="copyright-container">
                <p>© {new Date().getFullYear()} CR8R. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}
