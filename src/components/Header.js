import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            {/* ==========Header-Section========== */}
            <header className="header-section">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to="/login">
                                <img src="assets/images/logo/logo.png" alt="logo" />
                            </Link>
                        </div>
                        <ul className="menu">
                            <li>
                                <a className="active">Home</a>
                                <ul className="submenu">
                                    <li>
                                        <Link to='/' className="active">Home One</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Home Two</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a >movies</a>
                                <ul className="submenu">
                                    <li>
                                        <Link to="/movie_grid">Movie Grid</Link>
                                    </li>
                                    <li>
                                        <Link to="/movie_list">Movie List</Link>
                                    </li>
                                    <li>
                                        <Link to="/movie_details">Movie Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/movie_details">Movie Details 2</Link>
                                    </li>
                                    <li>
                                        <Link to="/ticket_plan">Movie Ticket Plan</Link>
                                    </li>
                                    <li>
                                        <Link to="/seatplan">Movie Seat Plan</Link>
                                    </li>
                                    <li>
                                        <Link to="/movie_checkout">Movie Checkout</Link>
                                    </li>
                                    <li>
                                        <Link to="/movie_food">Movie Food</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a >events</a>
                                <ul className="submenu">
                                    <li>
                                        <Link to="/event">Events</Link>
                                    </li>
                                    <li>
                                        <Link to="/event_detail">Event Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/speaker">Event Speaker</Link>
                                    </li>
                                    <li>
                                        <Link to="/ticket_event">Event Ticket</Link>
                                    </li>
                                    <li>
                                        <Link to="/ticket_checkout">Event Checkout</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a >sports</a>
                                <ul className="submenu">
                                    <li>
                                        <Link to="/sports">Sports</Link>
                                    </li>
                                    <li>
                                        <Link to="/sport_detail">Sport Details</Link>
                                    </li>
                                    <li>
                                        <Link to="/sport_ticket">Sport Ticket</Link>
                                    </li>
                                    <li>
                                        <Link to="/sport_checkout">Sport Checkout</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a >pages</a>
                                <ul className="submenu">
                                    <li>
                                        <Link to="/pages">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/app_down">Apps Download</Link>
                                    </li>
                                    <li>
                                        <Link to="/signin">Sign In</Link>
                                    </li>
                                    <li>
                                        <Link to="/signup">Sign Up</Link>
                                    </li>
                                    <li>
                                        <Link to="/error">404</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a >blog</a>
                                <ul className="submenu">
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog Single</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/contact">contact</Link>
                            </li>
                            <li className="header-button pr-0">
                                <Link to="/signup">join us</Link>
                            </li>
                        </ul>
                        <div className="header-bar d-lg-none">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </header>
            {/* ==========Header-Section========== */}

        </div>
    )
}

export default Header
