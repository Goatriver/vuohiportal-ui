/**
 *
 * Asynchronously loads the component for Cv
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
