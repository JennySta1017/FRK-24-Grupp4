import React from "react";
import styles from "./Searchbar.module.css";

const Searchbar = () => {

    return (
    <div id="inputcontainer">
        <input 
        className={styles.searchinput}
        type="text"
        placeholder="Sök" />
        <img 
        src="/images/magnifying-glass.png" 
        alt="magnifying-glass" 
        className={styles.searchicon} />
        <button className={styles.searchbutton}>
            Sök
        </button>
    </div>
    );
};

export default Searchbar;