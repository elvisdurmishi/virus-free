import React, {useState, useEffect} from 'react';

function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (<footer className={"d-flex align-items-center justify-content-center p-5 "}>
        <p>
            Powered by <a href="https://www.virustotal.com/">VirusTotal</a> API. Developed by <strong>Elvis</strong>.
            Connect with me
            on <a href="https://github.com/elvisdurmishi"><i className="fab fa-github"></i> Github</a> and <a
            href="https://www.linkedin.com/in/yourusername/"><i
            className="fab fa-linkedin"></i> Linkedin</a>. &copy; {year}.
        </p>
    </footer>);
}

export default Footer;
