const Footer = () => {
    const now = new Date()
    const thisYear = now.getFullYear();
    return (
    <footer className="Footer container">
        <div className="text-center py-4">
            <p className="text-light">Windfall Blogs &copy; {thisYear}</p>
        </div>
    </footer>
    )
}

export default Footer;