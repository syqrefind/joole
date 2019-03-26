import React from 'react';
import Radium from 'radium';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SearchPanel.css';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const constraints = ['Product Type', 'Technical Specifications', 'Brand', 'Past Selections', 'Certifications'];

// Failed Radium Usage

// const getStyles = (condition = false) => (condition? {

//     boxes: {
//         padding: "'8px' '9px' '8px' '9px'",
//         margin: "0, 0, 0, 0",
//         border: "'1px', 'solid', '#bfbfbf'",
//         ":nth-child(odd)": {
//             backgroundColor: "#f2f2f2",
//             cursor: "pointer"
//         },
//         display: "none"
//     }

// }:{
//     boxes: {
//         padding: "'8px' '9px' '8px' '9px'",
//         margin: "0, 0, 0, 0",
//         border: "'1px', 'solid', '#bfbfbf'",
//         ":nth-child(odd)": {
//             backgroundColor: "#f2f2f2",
//             cursor: "pointer"
//         }
//     }}
// );



const specs = [
    {
        name: 'Airflow',
        unit: '(CFM)',
        defaultMin: 2000,
        defaultMax: 10000
    },
    {
        name: 'Max power',
        unit: '(CFM)',
        defaultMin: 9.64,
        defaultMax: 96.52 
    },
    {
        name: 'Sound at max speed',
        unit: '(CFM)',
        defaultMin: 20,
        defaultMax: 80 
    },
    {
        name: 'Fan sweep diameter',
        unit: '(CFM)',
        defaultMin: 18,
        defaultMax: 96 
    }
];

let panels = specs.map(obj => (
    <div>
        <div className={styles.firstLineOfSpecs}><FontAwesomeIcon icon={faExchangeAlt} transform="rotate-90" color="#727272" /> <span className={styles.boldedText}>{obj.name}</span> {obj.unit}</div>
        {/* #a6a6a6 */}
        <div className={styles.secondLineOfSpecs}>{obj.defaultMin} <input type='range' name='parameter' min={obj.defaultMin} max={obj.defaultMax} /> {obj.defaultMax}</div>
    </div>    
));

const history = [
    {
        name: 'Firm',
        unit: null,
        defaultMin: 0,
        defaultMax: 10
    },
    {
        name: 'Global',
        unit: null,
        defaultMin: 0,
        defaultMax: 1492
    },
];

let history_panels = history.map(obj => (
    <div>
        <div className={styles.firstLineOfSpecs}><FontAwesomeIcon icon={faExchangeAlt} transform="rotate-90" color="#727272" /> <span className={styles.boldedText}>{obj.name}</span> {obj.unit}</div>
        <div className={styles.secondLineOfSpecs}>{obj.defaultMin} <input type='range' name='parameter' min={obj.defaultMin} max={obj.defaultMax} /> {obj.defaultMax}</div>
    </div>    
));

let modelYear = (
    <>
        <span className={styles.modelYear}>
            Model year:
        </span>
        <span className={styles.inputContainer}><input type='text' className={styles.inputYear} />
        –
        <input type='text' className={styles.inputYear} /></span>
    </>
);


// NEED DYNAMIC CSS OBJECTS DEFINED AS VARIABLES HERE (change with clicks, update HTML contents with interpolation)
 
let conditionalContents = index => (
    <>
        {index === 0? modelYear: null}
        {index === 1?
            <div className={styles.rangedInputsBox}>
                {panels}
            </div>: null
        }
        {index === 3?
            <div className={styles.rangedInputsBox}>
                {history_panels}
            </div>
        : null}
    </>
);

const handleClickExpand = event => {
    alert('expand clikced');
}

const handleToggleDropdown = event => {
    alert('toggle dropdown clikced');
}

let boxes = constraints.map((constraint, index) =>
    <>
        <div className={styles.boxes}>
            <span className={styles.entries} onClick={index % 2 === 0? handleClickExpand: handleToggleDropdown}>
                {constraint}
                <span className={styles.icons}>
                    {index % 2 === 0? <FontAwesomeIcon icon="caret-right" size='1x' />: null}
                    {index % 2 === 1? <FontAwesomeIcon icon="caret-down" size='1x' />: null}
                </span>
            </span>
        </div>

        <div className={styles.followingBoxes}>
            {conditionalContents(index)}
        </div>
    </>
);

const SearchPanel = props => {
    return (
        <div className={styles.container}>
            <div className={styles.searchHeader}>
                Search:
                <button type='button' className={styles.saveAndClear}>Save</button>
                <button type='button' className={styles.saveAndClear}>Clear</button>
            </div>
            <div className={styles.searchTabs}>
                <div className={styles.tabs}>Product</div>
                <div className={styles.tabs}>Project</div>
            </div>
            {boxes}
        </div>
    );
}

// export default Radium(SearchPanel);
export default SearchPanel;

