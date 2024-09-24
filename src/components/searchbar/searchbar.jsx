import React from "react";
import styles from "./searchbar.module.css";

const Searchbar = () => {

    return (
    <div>
        <input 
        className={styles.searchinput}
        type="text"
        placeholder="Sök" />
        <button className={styles.searchbutton}>
            Sök
        </button>
    </div>
    );
};

export default Searchbar;