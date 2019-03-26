import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SearchPanel.css';

const constraints = ['Product Type', 'Technical Specifications', 'Brand', 'Past Selections', 'Certifications'];

// NEED DYNAMIC CSS OBJECTS DEFINED AS VARIABLES HERE (change with clicks, update HTML contents with interpolation)

 
let boxes = constraints.map((constraint, index) =>
    <>
        <div className={styles.boxes}>
            <span className={styles.entries}>
                {constraint}
                <span className={styles.icons}>
                    {index % 2 === 0? <FontAwesomeIcon icon="caret-right" size='1x' />: null}
                    {index % 2 === 1? <FontAwesomeIcon icon="caret-down" size='1x' />: null}
                </span>
            </span>
        </div>

        <div className={styles.boxes}>
            dummy
        </div>
    </>
);

const SearchPanel = props => {
    return (
        <div className={styles.container}>
            {boxes}
        </div>
    );
}

export default SearchPanel;
