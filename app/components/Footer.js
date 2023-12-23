import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="footer-container">
            <div className="copyright-container">
                <p>© {new Date().getFullYear()} CR8R. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}
