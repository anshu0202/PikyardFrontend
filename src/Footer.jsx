import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Product</span>
              </li>
              <li className="nav-item">
                <Link className="nav-link links" to="#" >

                  Product 1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link linksTo" to="#">
                  Product 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link linksTo" to="#">
                  Plans & Prices
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link linksTo" to="/faq">
                  Frequently asked questions
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Company</span>
              </li>
              <li className="nav-item">
                <Link className="nav-link linksTo" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link linksTo" to="#">
                  Job postings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link linksTo" to="#">
                  News and articles
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-column">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="footer-title">Contact & Support</span>
              </li>
              <li className="nav-item">
                <span className="nav-link links">
                  <i className="fas fa-phone"></i>+47 45 80 80 80
                </span>
              </li>
              <li className="nav-item">
                <Link className="nav-link linksTo" href="#">
                  <i className="fas fa-comments"></i>Live chat
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link linksTo" to="/contact">
                  <i className="fas fa-envelope"></i>Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link linksTo" to="#">
                  <i className="fas fa-star"></i>Give feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <i className="fas fa-ellipsis-h"></i>
        </div>

        <div className="row text-center">
          <div className="col-md-4 box">
            <span className="copyright quick-links">
          
              {/* Copyright &copy; pikyard.com {new Date().getFullYear()} */}
              Copyright &copy; pikyard.com 2023

            </span>
          </div>
          <div className="col-md-4 box">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 box">
            <ul className="list-inline quick-links">
              <li className="list-inline-item">
                <a href="#" className="links">
                  Privacy Policy
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="links">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;











// const Footer = () => {
//   return (
//     <div className="Footer flex space__around pz__15 " style={{ "borderTop": ".3px solid rgba(21,21,21,0.5)" }}>
//       {/* Footer 1st part */}
//       <div className="leftFooter">
//         <div className="footer1st">

//           <div className="location flex py__10">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               fill="currentColor"
//               class="bi bi-geo-alt icon__color"
//               viewBox="0 0 16 16"
//             >
//               <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
//               <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
//             </svg>
//             <strong>Address:</strong>
//             <h6>SCF-4, 3rd Floor, Model Town Ext. D-Block, Ludhiana, Punjab 141003</h6>
//           </div>

//           <div className="location flex py__10">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               fill="currentColor"
//               class="bi bi-geo-alt icon__color"
//               viewBox="0 0 16 16"
//             >
//               <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
//             </svg>
//             <strong>Email:</strong>
//             <h6>palansul1@gmail.com</h6>
//           </div>

//           <div className="location flex py__10">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               class="bi bi-geo-alt icon__color"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
//             </svg>
//             <strong>Call us:</strong>
//             <h6>+00000000000</h6>
//           </div>

//           <div className="location flex py__10">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               fill="currentColor"
//               class="bi bi-geo-alt icon__color"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
//               <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
//             </svg>
//             <strong>Time:</strong>
//             <h6>10:00 Am - 10:00 Pm (everyday)</h6>
//           </div>
//         </div>
//       </div>
//       {/* mid footer */}
//       <div className="midFooter">
//         <h1>PIKYARD</h1>
//         <p>High Quality is our first priority</p>
//         <div className="ft">
//           <Link to="/contact"><h3>contact us</h3></Link>|
//           <Link to="/about"><h3>About us</h3></Link>|
//           <Link to="/support"><h3>Report us</h3></Link></div>

//         <p>Copyrights 2023 &copy; pikyard.com</p>
//       </div>
//       {/* Footer 2nd part */}
//       <div className="rightFooter">
//         <div className="mobile ">
//           <div className="footer__2nd__part">
//             <h5>Account</h5>

//             <Link to="/login"><h3>Sign In</h3></Link>
//             <Link to="/login"><h3>Registration</h3></Link>
//             <Link to="/password/forgot"><h3>Forgot Password</h3></Link>
//           </div>
//           {/* Footer 3rd part */}
//           <div className="footer__2nd__part">
//             <h5>Follow us</h5>
//             <Link to="/facebook.com"><h3>Facebook</h3></Link>
//             <Link to="/youtube.com"><h3>Youtube</h3></Link>
//             <Link to="/instagram.com"><h3>Instagram</h3></Link>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
