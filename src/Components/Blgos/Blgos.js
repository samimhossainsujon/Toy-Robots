import React from 'react';
import useTitleSetup from '../TitleSetup/TitleSetup';

const Blgos = () => {
    useTitleSetup('Blog' )
    return (
        <div className='px-5 mx-5'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times.</p>
                </div>
            </div>


            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-xl font-medium">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>


            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-xl font-medium">
                    What is express js? What is Nest JS ?
                </div>
                <div className="collapse-content">
                    <p>Next Js: NestJS is a framework for developing modern server-side applications in Node.js. <br />  Express Js : Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.</p>
                </div>
            </div>


            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-xl font-medium">
                    What is MongoDB aggregate and how does it work ?
                </div>
                <div className="collapse-content">
                    <p>Data aggregators work by combining atomic data from multiple sources, processing the data for new insights and presenting the aggregate data in a summary view. Furthermore, data aggregators usually provide the ability to track data lineage and can trace back to the underlying atomic data that was aggregated.</p>
                </div>
            </div>
        </div>



    );
};

export default Blgos;