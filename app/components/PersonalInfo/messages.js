/*
 * PersonalInfo Messages
 *
 * This contains all the text for the PersonalInfo component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.PersonalInfo';

export default defineMessages({
  personalInfo: {
    id: `${scope}.personalInfo`,
    defaultMessage: 'Personal info',
  },
  location: {
    id: `${scope}.location`,
    defaultMessage: 'Location',
  },
  yearOfBirth: {
    id: `${scope}.yearOfBirth`,
    defaultMessage: 'Year of birth',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'Phone',
  },
});
