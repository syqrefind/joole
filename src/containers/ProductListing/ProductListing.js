import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect} from 'react-router-dom';

import styles from './ProductListing.css';

import TopBar from '../../components/TopBar/TopBar';
import FilterPanel from '../FilterPanel/FilterPanel';
import ShowProducts from '../ShowProducts/ShowProducts';

class ProductListing extends Component {
    render() {
        // console.log(this.props.match.params.id); //working.

        return (
            <>
                <TopBar />
                <div className={styles.container}>
                    <FilterPanel />
                    <ShowProducts />
                </div>
            </>
        );
    }
}

export default ProductListing;