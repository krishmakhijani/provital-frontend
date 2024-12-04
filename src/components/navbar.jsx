import "../styles/nav.scss"
import { useState } from "react"

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        "List your practice",
        "For Employers",
        "Courses",
        "Books",
        "Speakers",
        "Doctors"
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={isMobileMenuOpen ? 'mobile-menu-active' : ''}>
            <div className="leftSide">
                <div className="logoImage">
                    <img src="../../public/logo.svg" alt="Logo" />
                </div>
                <div className="headerCompanyName">
                    ProVital
                </div>
            </div>

            <button className="hamburger-button" onClick={toggleMobileMenu}>
                <img src="../../public/hamburger.svg" alt="Menu" />
            </button>

            <div className="rightSide">
                <div className="rightBox">
                    <div className="navbarOptions">
                        {navItems.map((item, index) => (
                            <button key={index} className="navItems">
                                {item}
                            </button>
                        ))}
                        <div className={`dropdowndiv ${isDropdownOpen ? 'active' : ''}`}>
                            <button onClick={toggleDropdown}>
                                Login / Signup
                                <div>
                                    <img src="../../public/dropdown.svg" alt="Dropdown" />
                                </div>
                            </button>
                            <div className="dropdownBox">
                                <div className="dropdownDoctor">
                                    <div className="dropdownDoctorHeading">Doctor</div>
                                    <div className="dropdownDoctorButton">
                                        <button>Login</button>
                                        <button>Signup</button>
                                    </div>
                                </div>
                                <div className="dropdownLine"></div>
                                <div className="dropdownPatient">
                                    <div className="dropdownPatientHeading">Patient</div>
                                    <div className="dropdownPatientButton">
                                        <button>Login</button>
                                        <button>Signup</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-header">
                        <div className="leftSide">
                            <div className="logoImage">
                                <img src="../../public/logo.svg" alt="Logo" />
                            </div>
                            <div className="headerCompanyName">
                                ProVital
                            </div>
                        </div>
                        <button className="close-button" onClick={toggleMobileMenu}>
                            <img src="../../public/cancel_hamburger.svg" alt="Close" />
                        </button>
                    </div>

                    <div className="mobile-dropdown">
                        <div className="dropdownDoctor">
                            <div className="dropdownDoctorHeading">Doctor</div>
                            <div className="dropdownDoctorButton">
                                <button>Login</button>
                                <button>Signup</button>
                            </div>
                        </div>
                        <div className="dropdownLine"></div>
                        <div className="dropdownPatient">
                            <div className="dropdownPatientHeading">Patient</div>
                            <div className="dropdownPatientButton">
                                <button>Login</button>
                                <button>Signup</button>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-nav-items">
                        {navItems.map((item, index) => (
                            <div key={index}>
                                <div className="nav-item-wrapper">
                                    <button>{item}</button>
                                    <img src="../../public/arrow.svg" alt="arrow" />
                                </div>
                                {index !== navItems.length - 1 && <div className="divider"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
