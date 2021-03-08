/*
 * HeaderText Messages
 *
 * This contains all the text for the HeaderText component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.HeaderText';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Goatriver.fi',
  },
  cv: {
    id: `${scope}.cv`,
    defaultMessage: 'Curriculum Vitae',
  },
  notFound: {
    id: `${scope}.notFound`,
    defaultMessage: 'Not Found',
  },
});
