import { memo, use } from 'react';
import logo from "../assets/logo.png"
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { IoHeart } from "react-icons/io5";
import { TbBellFilled } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import user from "../assets/user.png"
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="Header">
        <nav>
            <div className="navbar">
                <img src={logo} alt="" />
                <button className='Search'>
                    <CiSearch className='btnicon1'/>
                    <input type="text"  placeholder='Search something here'/>
                    <VscSettings className='btnicon2' />
                </button>
            </div>
            <div className="profil">
                <div className="btns">
                    
                <button><IoHeart /></button>
                <button><TbBellFilled /></button>
                <button><IoIosSettings /></button>
                </div>
                <img src={user} alt="" />
            </div>
        </nav>       
    </div>



    <div className="Mediabar">
        <div className="profil0">
            <img src={logo} alt="" />
            <img src={user} alt="" />
        </div>
        <div className="search0">
            <button className="search-btn">
                <CiSearch className='srch'/>
                <input type="text"placeholder='Search something here'/>
            </button>
            <button className='setting'>
                <VscSettings />
            </button>
        </div>
    </div>
    </>
  );
};

export default memo(Navbar);