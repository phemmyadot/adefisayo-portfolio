import React from "react";
import styles from "./About.module.scss";

const About = (props) => (
  <div className={`${styles.About} container`} data-testid="About" ref={props.inputRef}>
    <h2 className={styles.Title}>About Me</h2>
    <div>
      <div className={styles.Text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consectetur, sapien in interdum pretium, mi mauris interdum ante, at
        aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque consectetur, sapien in interdum pretium, mi mauris interdum
        ante, at aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pellentesque consectetur, sapien in interdum pretium, mi mauris
        interdum ante, at aliquet. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Pellentesque consectetur, sapien in interdum pretium,
        mi mauris interdum ante, at aliquet. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Pellentesque consectetur, sapien in
        interdum pretium, mi mauris interdum ante, at aliquet. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Pellentesque consectetur, sapien
        in interdum pretium, mi mauris interdum ante, at aliquet. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur,
        sapien in interdum pretium, mi mauris interdum ante, at aliquet. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consectetur, sapien in interdum pretium, mi mauris interdum ante, at
        aliquet.
      </div>
      <div className={styles.Photo}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
          alt="adefisayo"
        />
      </div>
    </div>
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
