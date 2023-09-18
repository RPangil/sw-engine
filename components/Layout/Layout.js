import { Fragment } from 'react';
import styles from './Layout.module.scss';

const Layout = (props) =>
{
    return(
        <Fragment>
            {/* Insert nav here */}
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;