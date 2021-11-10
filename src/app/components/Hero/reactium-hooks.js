/**
 * -----------------------------------------------------------------------------
 * Reactium Plugin Hero
 * -----------------------------------------------------------------------------
 */

import Component from './index';
import Reactium from 'reactium-core/sdk';

Reactium.Plugin.register('Hero-plugin').then(() => {
    Reactium.Component.register('Hero', Component);
});
