import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace this URL with your actual Google Apps Script web app URL
      const response = await fetch("https://script.google.com/macros/s/AKfycbykp4SMnmrwyPofU1bKtHrJ49M09GjlaL0mFlB-_fMyFumkO-w0KQ8TyCpyXzXRJQnVIg/exec", {
        method: "POST",
        mode: "no-cors", // This is necessary for CORS restrictions
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
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
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}            
            </button>
            {submitStatus === "success" && (
              <div className="form-message success">
                Message sent! Thank you for your message. I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="form-message error">
                Error submitting form. Please try again or contact me directly via email.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
