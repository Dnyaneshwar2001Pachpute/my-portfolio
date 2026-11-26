
import "./Contact.css";

function Contact() {

  const phoneNumber = "919356790644";
  const whatsappMessage = encodeURIComponent(
    "Hello Dnyaneshwar, I visited your portfolio and would like to connect with you."
  )

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <span className="contact-label">GET IN TOUCH</span>
          <h1>Contact <span>Me</span></h1>
          <p>
            Have a project or job opportunity? Feel free to contact me.
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>
              I am open to Full Stack Java Developer opportunities,
              collaborations and interesting projects.
            </p>

            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <div>
                <h3>Email</h3>
                <a href="mailto:pachputednyaneshwar9@gmail.com">
                  pachputednyaneshwar9@gmail.com
                </a>
              </div>
            </div>

             {/* Phone */}
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h3>Phone Number</h3>
                <a href={`tel:+${phoneNumber}`}>
                  +{phoneNumber}
                </a>
                <br />
                <a href={`tel:+${phoneNumber}`} className="phone-action">
                  Call Now ↗
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact-item">
              <span className="contact-icon">💬</span>
              <div>
                <h3>WhatsApp</h3>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-action"
                >
                  Chat on WhatsApp ↗
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h3>Location</h3>
                <p>Beed, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <div>
                <h3>Profession</h3>
                <p>Full Stack Java Developer</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
            action="https://formsubmit.co/pachputednyaneshwar9@gmail.com" method="POST"           
          >
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Message"
            />

            <input
              type="hidden"
              name="_captcha"
              value="true"
            />

            <h2>Send Me a Message</h2>

            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message <span>↗</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
