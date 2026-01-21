import { memo } from 'react';

const Navbar = () => {
  return (
    <>
    <div className="Header">
        <nav>
            <div className="navbar">
                <img src="" alt="" />
                <button className='Search'>
                    <img src="" alt="" />
                    <p>Search something here</p>
                    <img src="" alt="" />
                </button>
            </div>
            <div className="profil">
                <img src="" alt="" />
            </div>
        </nav>
    </div>
    </>
  );
};

export default memo(Navbar);