import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image'

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/Profile.jpg"
                    alt="An image showing Ona"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Ona</h1>
            <p>
                I blog about web development - especially frontend frameworks like
                Angular or React.
            </p>
        </section>
    );
}
export default Hero;