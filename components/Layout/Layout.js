import { Fragment } from 'react';
import styles from './Layout.module.scss';

const Layout = (props) =>
{
    return(
        <Fragment>
            {/* Insert nav here */}
            <main className={styles.main}>{props.children}</main>
        </Fragment>
    );
}

export default Layout;