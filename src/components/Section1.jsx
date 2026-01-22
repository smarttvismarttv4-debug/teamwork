import './Section1.css'
import { MdRadioButtonChecked } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import ('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Readex+Pro:wght@160..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
import { LuArrowUpDown } from "react-icons/lu";
import { IoHeartSharp } from "react-icons/io5";
import car from '../assets/car.png'
import car2 from '../assets/car2.png'
import gas from '../assets/gas.png'
import manual from '../assets/manual.png'
import people from '../assets/people.png'

export default function Section1() {
    return (
        <>
            <div className="wrapper">
                <div className="first_card">
                    <div className="icon_header">
                        <MdRadioButtonChecked className='icon' />
                        <h2>Pick - Up</h2>
                    </div>
                    <div className="content">
                        <div className="location">
                            <h1>Locations</h1>
                            <div className="p_icon">
                                <p>Select your city</p>
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="location">
                            <h1>Date</h1>
                            <div className="p_icon">
                                <p>Select your date</p>
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="location">
                            <h1>Time</h1>
                            <div className="p_icon">
                                <p>Select your time</p>
                                 <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="icon_wrp">
                        <LuArrowUpDown className='icon2' />
                    </div>
                </div>
                <div className="first_card">
                    <div className="icon_header">
                        <MdRadioButtonChecked className='icon' />
                        <h2>Drop - Off</h2>
                    </div>
                    <div className="content">
                        <div className="location">
                            <h1>Locations</h1>
                            <div className="p_icon">
                                <p>Select your city</p>
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="location">
                            <h1>Date</h1>
                            <div className="p_icon">
                                <p>Select your date</p>
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className="location">
                            <h1>Time</h1>
                            <div className="p_icon">
                                <p>Select your time</p>
                                 <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card_wrapper">
                <div className="card1">
                    <div className="card_header">
                        <h1>Koenigsegg</h1>
                        <IoHeartSharp  className='heart'/>
                    </div>
                    <p className='sport'>Sport</p>
                    <img src={car} alt="" />
                    <div className="inf_wrp">
                        <img src={gas} alt="" />
                        <img src={manual} alt="" />
                        <img src={people} alt="" />
                    </div>
                    <div className="card_footer">
                        <h1>$99.00/ <span>day</span></h1>
                        <button>Rent Now</button>
                    </div>
                </div>
                <div className="card1">
                    <div className="card_header">
                        <h1>Nissan GT - R</h1>
                        <IoHeartSharp  className='heart'/>
                    </div>
                    <p>Sport</p>
                    <img src={car2} alt="" />
                    <div className="inf_wrp">
                        <img src={gas} alt="" />
                        <img src={manual} alt="" />
                        <img src={people} alt="" />
                    </div>
                    <div className="card_footer">
                        <h1>$80.00/ <span>day</span></h1>
                        <button>Rent Now</button>
                    </div>
                </div>
                <div className="card1">
                    <div className="card_header">
                        <h1>Nissan GT - R</h1>
                        <IoHeartSharp  className='heart'/>
                    </div>
                    <p>Sport</p>
                    <img src={car2} alt="" />
                    <div className="inf_wrp">
                        <img src={gas} alt="" />
                        <img src={manual} alt="" />
                        <img src={people} alt="" />
                    </div>
                    <div className="card_footer">
                        <h1>$80.00/ <span>day</span></h1>
                        <button>Rent Now</button>
                    </div>
                </div>
                <div className="card1">
                    <div className="card_header">
                        <h1>Nissan GT - R</h1>
                        <IoHeartSharp  className='heart'/>
                    </div>
                    <p>Sport</p>
                    <img src={car2} alt="" />
                    <div className="inf_wrp">
                        <img src={gas} alt="" />
                        <img src={manual} alt="" />
                        <img src={people} alt="" />
                    </div>
                    <div className="card_footer">
                        <h1>$80.00/ <span>day</span></h1>
                        <button>Rent Now</button>
                    </div>
                </div>
                <div className="card1">
                    <div className="card_header">
                        <h1>Nissan GT - R</h1>
                        <IoHeartSharp  className='heart'/>
                    </div>
                    <p>Sport</p>
                    <img src={car2} alt="" />
                    <div className="inf_wrp">
                        <img src={gas} alt="" />
                        <img src={manual} alt="" />
                        <img src={people} alt="" />
                    </div>
                    <div className="card_footer">
                        <h1>$80.00/ <span>day</span></h1>
                        <button>Rent Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}