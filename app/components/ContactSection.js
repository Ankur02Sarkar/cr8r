import React, { useState } from 'react'

import { MdClose } from "@react-icons/all-files/md/MdClose"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt"
import { FaRegClipboard } from "@react-icons/all-files/fa/FaRegClipboard"

export default function ContactSection() {
  const [popup, setPopup] = useState(false);
  const [aboutPlus, setAboutPlus] = useState(false);

  const copyToClipboard = (copyURL) => {
    navigator.clipboard.writeText(copyURL);
    setPopup(true);

    setTimeout(() => { setPopup(false) }, 1500);
  }

  return (
    <section className="contact-section" id="contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="about-card">
          <h2>About Us</h2>
          <p>
            We specialize in web development, creating dynamic and responsive websites tailored to clients&apos; needs.
            Additionally, We offer freelance video editing services, bringing creativity and precision to visual
            content. With a versatile skill set, We seamlessly balance both aspects of our freelance work.</p>
          <div
            className="about-card-plus"
            style={aboutPlus ? { opacity: '1', clipPath: 'circle(50rem at calc(100% - 2.5rem) calc(100% - 2.5rem))' } : null}>
            <h2>Our Expertise</h2>
            <p>
              <b className='text-lg'>Frontend Development : </b> 3 YOE<br />
              <b className='text-lg'>Backend Development : </b> 1.5 YOE<br />
              <b className='text-lg'>Video Editing : </b> 3 YOE<br />
              <b className='text-lg'>Graphics Designing : </b> 2 YOE<br />
            </p>
          </div>

          <div
            className="about-plus-btn"
            onClick={() => setAboutPlus(!aboutPlus)}
            style={aboutPlus ? { transform: 'none' } : null}>
            <MdClose />
          </div>
        </div>

        <div className="contact-card-container">
          <a href="mailto:cr8r.freelance@gmail.com" className="contact-card"><FaEnvelope /></a>
          <a href="https://github.com/ankur02sarkar" className="contact-card"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ankur-sarkar/" className="contact-card"><FaLinkedin /></a>
          <a onClick={() => copyToClipboard('+917449600707')} href='tel:+917449600707' className="contact-card"><FaPhoneAlt /></a>
        </div>
      </div>

      {/* <div className="clipboard-popup" style={popup ? { transform: 'translate(-50%, 0rem)' } : null}>
        <FaRegClipboard />
        Copied to Clipboard
      </div> */}
    </section>
  );
}
