
import './Section0.css'

import { memo } from 'react';
import car01 from "../assets/car01.png"
import car02 from "../assets/car02.png"

const Section0 = () => {
  return (
    <>
    <div className="Section0">

        <div className="card01">
            <div className="text01">
                <h1>The Best Platform <br /> for Car Rental</h1>
                <p>Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
                <button>Rental Car</button>

            </div>
            <img src={car01} alt="" />
        </div>

        <div className="card02">
            <div className="text02">
                <h1>Easy way to rent a <br /> car at a low price</h1>
                <p>Providing cheap car rental services <br /> and safe and comfortable facilities.</p>
                <button>Rental Car</button>
            </div>
            <img src={car02} alt="" />
        </div>

    </div>
    </>
  );
};

export default memo(Section0);