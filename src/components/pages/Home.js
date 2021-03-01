import Advanced from "../advanced components/Advanced"
import BoostLinks from "../BoostLinks"
import React from 'react';
import Hero from "../Hero";
import FocusContext from '../../context/context';

const Home = () => {
    const inputElementRef = React.useRef(null);

    const clickFocusHandler = () => {
        inputElementRef.current.focus();
    }

    return (
        <main>
            <FocusContext.Provider value={{ inputEl: inputElementRef, clickHandler: clickFocusHandler }}>
                <Hero />
                <Advanced />
            </FocusContext.Provider>
            <BoostLinks />
        </main>
    );
}

export default Home;