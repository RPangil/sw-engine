import { Fragment } from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.scss';

const Layout = (props) =>
{
    return(
        <Fragment>
            <Navigation />
            <main className={styles.main}>{props.children}</main>
        </Fragment>
    );
}

export default Layout;