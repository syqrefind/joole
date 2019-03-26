import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ShowProducts.css';

const ShowProducts = props => {
    return (
        <div className={styles.container}>
            <div className={styles.directory}>
                <span className={styles.higherDirectory}>Mechanical ></span><span className={styles.lowerDirectory}> HVAC Fans</span>
            </div>
            <div className={styles.productTable}>
                <div className={styles.cell}>
                    <div className={styles.verified}>
                        Verified 08/21/2016
                    </div>
                    <div className={styles.imageAndName}>
                        <img src='/static/fans/Big-Ass-Haiku-H-Series-S3150-S0-BC-04-01-C-01.png' height='110' alt='Product'></img>
                        <div className={styles.productName}>
                            Emerson<br />Luray Eco Series<br />CF860
                        </div>
                    </div>
                    <div className={styles.briefSpecs}>
                    8,500 CFM<br />
                    33 W at max speed<br />
                    40 dBA at max speed<br />
                    60” fan sweep diameter
                    </div>
                    <div className={styles.history}>
                    Past specifications:<br />10 firm / 1492 global
                    </div>
                    <div className={styles.compareAndAdd}>
                        <input type='checkbox' className={styles.checkToCompare} />Compare
                        <button type='button' className={styles.add}>Add to <FontAwesomeIcon icon='caret-down' className={styles.icon} /></button>
                    </div>
                </div>
                <div className={styles.cell}>
                    dummy cell
                </div>
                <div className={styles.cell}>
                    dummy cell
                </div>
                <div className={styles.cell}>
                    dummy cell
                </div>
            </div>
        </div>
    );
}

export default ShowProducts;