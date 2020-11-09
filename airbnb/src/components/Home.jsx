import React from 'react';
import styles from './Home.module.css';

class Home extends React.Component {
    render() {
        return (
            <div className={styles.home}>
                <h1>Home Component</h1>
            </div>
        )
    }
}

export default Home;