import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/submit', formData);
      alert("Message sent! Thank you for your message. I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      alert('Error submitting form. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail className="icon" />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>thinujaya1@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone className="icon" />
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+94 76 472 2303</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin className="icon" />
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Pannipitiya, Colombo</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
              </div>
              <div className="form-group">
              <textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
              ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
  );
};

export default Contact;