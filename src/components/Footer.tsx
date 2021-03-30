import React from 'react';
import {useDispatch, useSelector} from "store";
import {showMenu} from "store/actions";

const Footer = () => {
    const ui = useSelector(state => state.ui);
    const dispatch = useDispatch();

    return (
        <div>
            {ui.menu.isVisible ? 'menu visible' : 'menu HIDDEN'}
            <button onClick={() => dispatch(showMenu)}>show menu</button>
        </div>
    )
};

export default Footer;