import React from "react";
import styles from './header.module.css';

// A component that displays the header h1 element
export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Weather at a Glance</h1>
        </header>
    );
}