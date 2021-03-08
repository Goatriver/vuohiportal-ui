/*
 * Cv Messages
 *
 * This contains all the text for the Cv container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Cv';

export default defineMessages({
  personalInfo: {
    id: `${scope}.personalInfo`,
    defaultMessage: 'Personal info',
  },
  itEngineer: {
    id: `${scope}.itEngineer`,
    defaultMessage: 'Bachelor of Engineering (IT)',
  },
  proSkills: {
    id: `${scope}.proSkills`,
    defaultMessage: 'Professional skills',
  },
  langSkills: {
    id: `${scope}.langSkills`,
    defaultMessage: 'Language skills',
  },
  otherInterests: {
    id: `${scope}.otherInterests`,
    defaultMessage: 'Other interests',
  },
  education: {
    id: `${scope}.education`,
    defaultMessage: 'Education',
  },
  experience: {
    id: `${scope}.experience`,
    defaultMessage: 'Experience',
  },
});
