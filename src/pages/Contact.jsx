import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFilePdf } from 'react-icons/fa';
import contactBackground from '../data/images/contact-background.jpg';

const ContactForm = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                color: 'white',
                padding: '20px',
                borderRadius: '10px', 
            }}
        >
            <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{ color: 'white' }}>
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">
                    Message
                </label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

const Contact = () => {
    return (
        <div
        style={{
          backgroundImage: `url(${contactBackground})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          minHeight: '100vh', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
            <div style={{ marginTop: '56px'}} >
            </div>
            
            <div style={{ padding: '20px', color: 'white', textAlign: 'center'}}>
                <h1>Contact Me</h1>
            </div>

            <div style={{ padding: '20px', color: 'white', marginBottom: '50px', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '20px' }}>See My Stuff</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px', margin: 'auto' }}>
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                        <FaGithub size={30} />
                    </a>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </div>

            <div style={{ padding: '20px', color: 'white', marginBottom: '50px', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '20px' }}>Get In Touch</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px', margin: 'auto' }}>
                    <div>
                        <FaEnvelope size={30} style={{ marginRight: '10px' }} />
                        email@example.com
                    </div>
                    <div>
                        <FaPhone size={30} style={{ marginRight: '10px' }} />
                        +123456789
                    </div>
                </div>
            </div>

            <div style={{ padding: '20px', color: 'white', marginBottom: '50px', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '20px' }}>See My CV</h2>
                <a href="../data/images/me.jpg" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                    <FaFilePdf size={30} />
                </a>
            </div>

            <div style={{padding: '20px', color: 'white' }}>
            <h2>Have A Question?</h2>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;