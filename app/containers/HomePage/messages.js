/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  fullName: {
    id: `${scope}.fullName`,
    defaultMessage: 'Pasi Vuohijoki',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Father ⭐ Full Stack Developer ⭐ Rockstar',
  },
  descriptionResponsive: {
    id: `${scope}.descriptionResponsive`,
    defaultMessage: 'Father\n⭐\nFull Stack Developer\n⭐\nRockstar',
  },
});
