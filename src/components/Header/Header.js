import React from 'react';
import styles from './Header.module.scss';

const Header = (props) => (
  <div className={styles.Header} data-testid="Header" ref={props.inputRef}>
    <div className={styles.Intro}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, sapien in interdum pretium, mi mauris interdum ante, at aliquet.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, sapien in interdum pretium, mi mauris interdum ante, at aliquet.
    </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
