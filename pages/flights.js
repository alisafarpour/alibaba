import React from 'react'
import Footer from "../src/footer.js";
import Header from "../src/header.js";
import FilterBox from '../src/Components/filterBox.js';

function flights() {
    return (
        <div>
            <Header />
            <FilterBox />
            <Footer />
        </div>

    )
}

export default flights