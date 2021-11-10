import React from 'react';
import { cxFactory } from 'reactium-core/sdk';
import hero from './assets';
import op from 'object-path';

/**
 * -----------------------------------------------------------------------------
 * Functional Component: Hero
 * -----------------------------------------------------------------------------
 */
const Hero = props => {
    const cn = cxFactory('hero');

    const index = 0;
    const hat = hero.hat[index];
    const hair = hero.hair[index];
    const ears = hero.ears[index];
    const mask = hero.mask[index];
    const neck = hero.neck[index];
    const face = hero.face[index];
    const leftArm = hero.leftArm[index];
    const rightArm = hero.rightArm[index];
    const logo = hero.logo[index];
    const body = hero.body[index];
    const legs = hero.legs[index];
    const shoes = hero.shoes[index];
    const wing = hero.wing[index];

    return (
        <div className={cn()}>
            <div className={cn('figure')}>
                <img
                    className={cn('hat')}
                    src={hat.img}
                    style={hat.style || {}}
                />
                <img
                    className={cn('hair')}
                    src={hair.img}
                    style={hair.style || {}}
                />
                <img
                    className={cn('ears')}
                    src={ears.img}
                    style={ears.style || {}}
                />
                <img
                    className={cn('mask')}
                    src={mask.img}
                    style={mask.style || {}}
                />
                <img
                    className={cn('neck')}
                    src={neck.img}
                    style={neck.style || {}}
                />
                <img
                    className={cn('face')}
                    src={face.img}
                    style={face.style || {}}
                />
                <img
                    className={cn('leftArm')}
                    src={leftArm.img}
                    style={leftArm.style || {}}
                />
                <img
                    className={cn('rightArm')}
                    src={rightArm.img}
                    style={rightArm.style || {}}
                />
                <img
                    className={cn('logo')}
                    src={logo.img}
                    style={logo.style || {}}
                />
                <img
                    className={cn('body')}
                    src={body.img}
                    style={body.style || {}}
                />
                <img
                    className={cn('legs')}
                    src={legs.img}
                    style={legs.style || {}}
                />
                <img
                    className={cn('shoes')}
                    src={shoes.img}
                    style={shoes.style || {}}
                />
                <img
                    className={cn('wing')}
                    src={wing.img}
                    style={wing.style || {}}
                />
            </div>
        </div>
    );
};

export default Hero;
