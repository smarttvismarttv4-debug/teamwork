import "./Section3.css";
import { BsHeart } from "react-icons/bs";
import { FaHeart, FaUserGroup } from "react-icons/fa6";
import { PiGasPumpFill } from "react-icons/pi";
import { TbSteeringWheelFilled } from "react-icons/tb";

import Photo1 from "../assets/Photo.png";
import Photo2 from "../assets/Photo2.png";
import Photo3 from "../assets/Photo3.png";
import Photo4 from "../assets/Photo4.png";

function Section3() {
    return (
        <div className="section-container">
            <div className="car-card">
                <div className="card-header">
                    <div>
                        <h3>All New Rush</h3>
                        <p>SUV</p>
                    </div>
                    <BsHeart className="heart-icon" />
                </div>
                <div className="car-img-wrapper">
                    <img src={Photo1} alt="Car" />
                </div>
                <div className="car-specs">
                    <span><PiGasPumpFill /> 70L</span>
                    <span><TbSteeringWheelFilled /> Manual</span>
                    <span><FaUserGroup /> 6 People</span>
                </div>
                <div className="card-footer">
                    <div className="price-info">
                        <span className="current-price">$72.00/ <small>day</small></span>
                        <span className="old-price">$80.00</span>
                    </div>
                    <button className="rent-btn">Rent Now</button>
                </div>
            </div>

            <div className="car-card">
                <div className="card-header">
                    <div>
                        <h3>CR - V</h3>
                        <p>SUV</p>
                    </div>
                    <FaHeart className="heart-icon red" />
                </div>
                <div className="car-img-wrapper">
                    <img src={Photo2} alt="Car" />
                </div>
                <div className="car-specs">
                    <span><PiGasPumpFill /> 80L</span>
                    <span><TbSteeringWheelFilled /> Manual</span>
                    <span><FaUserGroup /> 6 People</span>
                </div>
                <div className="card-footer">
                    <div className="price-info">
                        <span className="current-price">$80.00/ <small>day</small></span>
                    </div>
                    <button className="rent-btn">Rent Now</button>
                </div>
            </div>

            <div className="car-card">
                <div className="card-header">
                    <div>
                        <h3>All New Terios</h3>
                        <p>SUV</p>
                    </div>
                    <BsHeart className="heart-icon" />
                </div>
                <div className="car-img-wrapper">
                    <img src={Photo3} alt="Car" />
                </div>
                <div className="car-specs">
                    <span><PiGasPumpFill /> 90L</span>
                    <span><TbSteeringWheelFilled /> Manual</span>
                    <span><FaUserGroup /> 6 People</span>
                </div>
                <div className="card-footer">
                    <div className="price-info">
                        <span className="current-price">$74.00/ <small>day</small></span>
                    </div>
                    <button className="rent-btn">Rent Now</button>
                </div>
            </div>

            <div className="car-card">
                <div className="card-header">
                    <div>
                        <h3>CR - V</h3>
                        <p>SUV</p>
                    </div>
                    <FaHeart className="heart-icon red" />
                </div>
                <div className="car-img-wrapper">
                    <img src={Photo4} alt="Car" />
                </div>
                <div className="car-specs">
                    <span><PiGasPumpFill /> 80L</span>
                    <span><TbSteeringWheelFilled /> Manual</span>
                    <span><FaUserGroup /> 6 People</span>
                </div>
                <div className="card-footer">
                    <div className="price-info">
                        <span className="current-price">$80.00/ <small>day</small></span>
                    </div>
                    <button className="rent-btn">Rent Now</button>
                </div>
            </div>
        </div>
    );
}

export default Section3;