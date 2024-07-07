import React from 'react'

export default function Contact() {
  return (
    <section className='contact p-1'>
      <div className="title">
      Interested in delving deeper into the project?
      </div>
      <p className='ff-poppins p-1'>
      If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <a href="mailto:hello@abc.com">hello@abc.com</a> or give us a call at <a href="tel:+91 480 20802730">+91 480 20802730</a>.
      </p>
      <div className='m-1 p-1'>
        <button className="btn btn-secondary m-1">
        Ring us on Skype
        </button>
        <button className="btn btn-primary">
        Contact Us
        </button>
      </div>
    </section>
  )
}
