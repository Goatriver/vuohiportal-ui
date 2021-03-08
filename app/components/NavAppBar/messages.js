/*
 * NavAppBar Messages
 *
 * This contains all the text for the NavAppBar component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.NavAppBar';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the NavAppBar component!',
  },
});
