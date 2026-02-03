const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} TaskManger App. All rights reserved</p>
                <a className="footer-link" href="/">Terms of Service</a>
                <a className="footer-link" href="/">Privacy Policy</a>
                <a className="footer-link" href="/">Contact us</a>
            </div>
        </footer>
    )
   
}

export default Footer;