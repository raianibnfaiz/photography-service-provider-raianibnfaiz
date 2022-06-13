import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className="text-center mt-5 p-3 bg-dark text-white">
            <p><small>copyright  © {year}</small> </p>
        </footer>
    );
};

export default Footer;