import React from 'react'
import classes from './Store.module.css'
import User from "../../component/container/user/User";

const Store = (props) => {

    return (
        <div className={classes.Store} >

            <main>
                {props.children}

            </main>
        </div>
    );
};

export default Store;