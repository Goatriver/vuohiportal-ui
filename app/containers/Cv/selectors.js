import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cv state domain
 */

const selectCvDomain = state => state.cv || initialState;

/**
 * Other specific selectors
 */
const makeSelectPublicInfo = () =>
  createSelector(
    selectCvDomain,
    substate => substate.publicInfo.info,
  );

const makeSelectProfessionalSkills = () =>
  createSelector(
    selectCvDomain,
    substate => substate.professionalSkills.professionalSkills,
  );

const makeSelectLanguageSkills = () =>
  createSelector(
    selectCvDomain,
    substate => substate.languageSkills.languageSkills,
  );

const makeSelectOtherInterests = () =>
  createSelector(
    selectCvDomain,
    substate => substate.otherInterests.otherInterests,
  );

const makeSelectEducations = () =>
  createSelector(
    selectCvDomain,
    substate => substate.educations.educations,
  );

const makeSelectExperiences = () =>
  createSelector(
    selectCvDomain,
    substate => substate.experiences.experiences,
  );
/**
 * Default selector used by Cv
 */

const makeSelectCv = () =>
  createSelector(
    selectCvDomain,
    substate => substate,
  );

export default makeSelectCv;
export {
  selectCvDomain,
  makeSelectPublicInfo,
  makeSelectProfessionalSkills,
  makeSelectLanguageSkills,
  makeSelectOtherInterests,
  makeSelectEducations,
  makeSelectExperiences,
};
