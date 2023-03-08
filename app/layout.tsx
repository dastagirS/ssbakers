import Link from 'next/link';
import './globals.css'


export const metadata = {
  title: 'SSBakers',
  description: 'Fanatasy came true',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  return (
    <html lang="en">
      <body>
       
        {children}
        <footer className="footer-main">
          <div className="footer-logo">
            <img
              src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1677519905/ssbakers/ss_logo_ohe3qb.png"
              alt="ssbakers logo"
            />
          </div>
          <div className="footer-contact">
            <h4 className="footer-contact-title">Contact</h4>
            <span>
              <h5>Call us :</h5>
              <h5>Mail us :</h5>
            </span>
          </div>
          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <span>
              <a href="">Home</a>
              <a href="">Customize Cakes</a>
              <a href="">Memorella</a>
              <a href="">Franchise</a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
