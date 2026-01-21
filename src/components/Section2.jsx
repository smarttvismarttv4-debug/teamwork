import React from 'react';
import "./Section2.css";
import { FaHeart, FaGasPump } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { TbSteeringWheel } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";
import Car from "../assets/Car.png";
import Car2 from "../assets/Car2.png";

export default function Section2() {
    return (
        <div className='container'>
            <div className="card-wrapper">
                <div className='card'>
                    <div>
                        <h3>MG ZX Exclusice</h3>
                        <h4>Hatchback</h4>
                    </div>
                    <div className='heart'><FaHeart /></div>
                </div>
                <div className='card-img'><img src={Car} alt="Car" /></div>
                <div className='car-specs'>
                    <div className='spec-item'><FaGasPump /><p>70L</p></div>
                    <div className='spec-item'><TbSteeringWheel /><p>Manual</p></div>
                    <div className='spec-item'><LuUsers /><p>4 People</p></div>
                </div>
                <div className='card-footer'>
                    <div className='price'>
                        <h4>$76.00/ <span>day</span></h4>
                        <del>$80.00</del>
                    </div>
                    <div className='    button'><button>Rent Now</button></div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className='card'>
                    <div>
                        <h3>New MG ZS</h3>
                        <h4>SUV</h4>
                    </div>
                    <div className='heart2'><CiHeart /></div>
                </div>
                <div className='card-img'><img src={Car2} alt="Car" /></div>
                <div className='car-specs'>
                    <div className='spec-item'><FaGasPump /><p>80L</p></div>
                    <div className='spec-item'><TbSteeringWheel /><p>Manual</p></div>
                    <div className='spec-item'><LuUsers /><p>6 People</p></div>
                </div>
                <div className='card-footer'>
                    <div className='price'><h4>$80.00/ <span>day</span></h4></div>
                    <div className='button'><button>Rent Now</button></div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className='card'>
                    <div>
                        <h3>MG ZX Excite</h3>
                        <h4>Hatchback</h4>
                    </div>
                    <div className='heart'><FaHeart /></div>
                </div>
                <div className='card-img'><img src={Car} alt="Car" /></div>
                <div className='car-specs'>
                    <div className='spec-item'><FaGasPump /><p>90L</p></div>
                    <div className='spec-item'><TbSteeringWheel /><p>Manual</p></div>
                    <div className='spec-item'><LuUsers /><p>4 People</p></div>
                </div>
                <div className='card-footer'>
                    <div className='price'><h4>$74.00/ <span>day</span></h4></div>
                    <div className='button'><button>Rent Now</button></div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className='card'>
                    <div>
                        <h3>New MG ZS</h3>
                        <h4>SUV</h4>
                    </div>
                    <div className='heart2'><CiHeart /></div>
                </div>
                <div className='card-img'><img src={Car2} alt="Car" /></div>
                <div className='car-specs'>
                    <div className='spec-item'><FaGasPump /><p>80L</p></div>
                    <div className='spec-item'><TbSteeringWheel /><p>Manual</p></div>
                    <div className='spec-item'><LuUsers /><p>6 People</p></div>
                </div>
                <div className='card-footer'>
                    <div className='price'><h4>$80.00/ <span>day</span></h4></div>
                    <div className='button'><button>Rent Now</button></div>
                </div>
            </div>

            <div className="buttons">
                <button className="button2">Show more car</button>
                <span className="car">120 Car</span>
            </div>
        </div>
    );
}