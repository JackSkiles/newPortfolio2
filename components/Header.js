import React from 'react'
import styles from '../styles/header.module.css'
import ReactDom from 'react-dom';
import { useState } from 'react';

export default function Header(props) {
    const [hide, setHide] = useState("Hide");

    // click event to hide or open mobile menu.
    const onClick = () => {
        console.log(hide);
        // console.log(mobileMenuButton)

        // if mobile menu is hidden, this will remove that text to set it to shown
        if (hide === "Hide") {
            setHide("");
        }
        // else if mobile menu is showing, this will add text Hide to set it to hidden.
        else if (hide === "") {
            setHide("Hide");
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.headerLeft}>
                <h1 className={styles.title}>JACK SKILES</h1>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.menuGroup}>
                    <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                    <a href="#about" className={styles.menuItem}>About Me</a>
                </div>
                <div className={styles.menuGroup}>
                    <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                    <a href="#devProjects" className={styles.menuItem}>Development Projects</a>
                </div>
                <div className={styles.menuGroup}>
                    <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                    <a href="#designProjects" className={styles.menuItem}>Design and UI Projects</a>
                </div>
                <div className={styles.menuGroup}>
                    <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                    <a href="#footerMain" className={styles.menuItem}>Contact Me</a>
                </div>
            </div>
            <div className={`mobileMenuButton${hide}`} >
                <button onClick={onClick}>
                    <div className={`mobileX${hide}Left`} />
                    <div className={`mobileX${hide}Center`} />
                    <div className={`mobileX${hide}Right`} />
                </button>
            </div>
            <div className={`headerRightMobile${hide}`}>
                <div className="outerHeaderRightMobile">
                    <div className={styles.menuGroup2}>
                        <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                        <a href="#about" className={styles.menuItem}>About Me</a>
                    </div>
                    <div className={styles.menuGroup2} id="top-div">
                        <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                        <a href="#devProjects" className={styles.menuItem}>Development Projects</a>
                    </div>
                    <div className={styles.menuGroup2}>
                        <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                        <a href="#designProjects" className={styles.menuItem}>Design and UI Projects</a>
                    </div>
                    <div className={styles.menuGroup2}>
                        <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                        <a href="#footerMain" className={styles.menuItem}>Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
