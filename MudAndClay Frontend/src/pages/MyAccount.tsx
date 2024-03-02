import React, { useEffect, useState } from 'react';
import "../assets/css/MyAccount.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MyAccount: React.FC = () => {
    const isLoggedIn = !!localStorage.getItem("userId");
    const { id } = useParams();
    const [userDetails, setUserDetails] = useState<any>({});


    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        try {

            const userId = localStorage.getItem('userId');

            if (userId) {

                const response = await axios.get(`http://localhost:8082/user/getById/${userId}`);

                setUserDetails(response.data);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    return (
        <div className={"myaccount-container"}>
            <div className={"myaccount-header"}>
                <div className={"myaccount-logo"}>
                    <a href="/dashboard">
                        <img
                            width={100}
                            src={"../images/logof.png"}
                            alt="Logo"
                        />
                    </a>
                </div>
                {/*<div className={"myaccount-btn_before"}>*/}
                {/*    /!*<button>Brands</button>*!/*/}
                {/*    <button>Categories</button>*/}
                {/*    <Link to="/Contactus"><button>Contact Us</button></Link>*/}
                {/*    <Link to="/Aboutus"><button>About Us</button></Link>*/}
                {/*</div>*/}
                <div className={"myaccount-searchbar"}>
                    <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"myaccount-search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className={"myaccount-btn-wrapper"}>
                    <Link to={"/cart"}>
                        <button>
                            <i className="fa-solid fa-cart-shopping cart-icon"></i>Cart
                        </button>
                    </Link>
                    <Link to={'/wishlist'}>
                        <button>
                            <i className="fa-regular fa-heart"></i>Wishlist
                        </button>
                    </Link>
                    {isLoggedIn ? (
                        <>
                            <Link to="/myaccount">
                                <button>My Account</button>
                            </Link>
                            <Link to="/">
                                <button onClick={()=>{
                                    localStorage.clear();
                                    window.location.href="/login"
                                }}>Sign Out</button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login"><button>Sign In</button></Link>
                            <Link to="/register"><button>Sign Up</button></Link>
                        </>
                    )}
                </div>
            </div>

            <div className={"myaccount-body"}>
                <div className={"myaccount-profile-first"}>
                    <div className={"myaccount-manage-my-account"}>
                        <h2>Manage My Account</h2>
                        <Link to="/MyAccount"><button>My profile</button></Link>
                    </div>
                    <div className={"myaccount-my-orders"}>
                        <h2>My Orders</h2>
                        <Link to="/Myorders"><button>My Orders</button></Link>
                    </div>
                </div>
                <div className={"myaccount-profile-second"}>
                    <div className={"myaccount-section1"}>
                        <h3>My profile</h3>
                    </div>
                    <div className={"myaccount-section2"}>
                        <div className={"myaccount-info"}>
                            <div className={"myaccount-part1"}>
                                <div>
                                    <label>First Name:</label>
                                    <input type="text" value={userDetails.firstName} readOnly />
                                </div>
                                <div>
                                    <label>Last Name:</label>
                                    <input type="text" value={userDetails.lastName} readOnly />
                                </div>
                                <div>
                                    <label>Email Address:</label>
                                    <input type="text" value={userDetails.email} readOnly />
                                </div>
                            </div>
                        </div>
                        <div className={"myaccount-buttons"}>
                            <Link to="/EditProfile"><button>EDIT PROFILE</button></Link>
                            <Link to="/Changepassword"><button>CHANGE PASSWORD</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className={"myaccount-footer"}>*/}
            {/*    <div className={"myaccount-get-help"}>*/}
            {/*        <h1>GET HELP</h1>*/}
            {/*        <Link to="/Customercare"><button>Customer Care</button></Link>*/}
            {/*        <Link to="/Payment"><button>Payment Options</button></Link>*/}
            {/*        <Link to="/returnandrefundpolicy"><button>Return and Refund Policy</button></Link>*/}
            {/*        <Link to="/PrivacyPolicy"><button>Privacy Policy</button></Link>*/}
            {/*        <Link to="/Termsandcondition"><button>Terms and Conditions</button></Link>*/}
            {/*        <span>@2023 Mud&Clay Pvt. Ltd. All Rights Reserved</span>*/}
            {/*    </div>*/}
            {/*    <div className={"myaccount-about-us"}>*/}
            {/*        <h1>Mud&Clay</h1>*/}
            {/*        <Link to="/Aboutus"><button>About Us</button></Link>*/}
            {/*        <Link to="/Contactus"><button>Contact Us</button></Link>*/}
            {/*        <Link to="/Careers"><button>Careers</button></Link>*/}
            {/*    </div>*/}
            {/*    <div className={"myaccount-logos"}>*/}
            {/*        <span>Connect with us:</span>*/}
            {/*        <a href="https://www.facebook.com/profile.php?id=61555012223662&is_tour_dismissed=true"*/}
            {/*           target="_blank" rel="noopener noreferrer">*/}
            {/*            <img*/}
            {/*                width={43}*/}
            {/*                src={"images/fb.png"}*/}
            {/*                alt="Facebook"*/}
            {/*            />*/}
            {/*        </a>*/}
            {/*        <a href="https://www.instagram.com/"*/}
            {/*           target="_blank" rel="noopener noreferrer">*/}
            {/*            <img*/}
            {/*                width={43}*/}
            {/*                src={"images/insta.png"}*/}
            {/*                alt="Instagram"*/}
            {/*            />*/}
            {/*        </a>*/}
            {/*        <a href="https://www.threads.net/"*/}
            {/*           target="_blank" rel="noopener noreferrer">*/}
            {/*            <img*/}
            {/*                width={43}*/}
            {/*                src={"images/thread.png"}*/}
            {/*                alt="Threads"*/}
            {/*            />*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default MyAccount;