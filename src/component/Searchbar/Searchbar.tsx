import React, {FC} from 'react';
import classes from "./Searchbar.module.css"
import {IoSearch} from "react-icons/io5";

const Searchbar: FC = () => {
    return (
        <div className={classes.searchbar_container}>
            <input className={classes.search_input}/>
            <IoSearch className={classes.search_icon} />
        </div>
    );
};

export default Searchbar;