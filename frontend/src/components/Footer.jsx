import React from 'react';
import '../index.css';

function Footer() {
    return (
        <footer className = "footer">
            <div className = "container">
                <p>&copy; {new Date().getFullYear()} Spark! BookPals. All Rights Reserved. </p>
            </div>
        </footer>
    )
}

export default Footer;