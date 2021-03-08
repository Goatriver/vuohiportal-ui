/*
 *
 * Cv reducer
 *
 */
import produce from 'immer';
import {
  LOAD_PUBLIC_INFO,
  LOAD_PUBLIC_INFO_SUCCESS,
  LOAD_PUBLIC_INFO_ERROR,
  LOAD_PROFESSIONAL_SKILLS,
  LOAD_PROFESSIONAL_SKILLS_ERROR,
  LOAD_PROFESSIONAL_SKILLS_SUCCESS,
  LOAD_LANGUAGE_SKILLS_SUCCESS,
  LOAD_LANGUAGE_SKILLS_ERROR,
  LOAD_LANGUAGE_SKILLS,
  LOAD_OTHER_INTERESTS,
  LOAD_OTHER_INTERESTS_ERROR,
  LOAD_OTHER_INTERESTS_SUCCESS,
  LOAD_EDUCATIONS,
  LOAD_EDUCATIONS_SUCCESS,
  LOAD_EDUCATIONS_ERROR,
  LOAD_EXPERIENCES_ERROR,
  LOAD_EXPERIENCES_SUCCESS,
  LOAD_EXPERIENCES,
} from './constants';

export const initialState = {
  publicInfo: {
    loading: false,
    error: false,
    info: false,
  },
  educations: {
    loading: false,
    error: false,
    educations: false,
  },
  experiences: {
    loading: false,
    error: false,
    experiences: false,
  },
  languageSkills: {
    loading: false,
    error: false,
    languageSkills: false,
  },
  otherInterests: {
    loading: false,
    error: false,
    otherInterests: false,
  },
  professionalSkills: {
    loading: false,
    error: false,
    professionalSkills: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const cvReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // Public info:
      case LOAD_PUBLIC_INFO:
        draft.publicInfo.loading = true;
        draft.publicInfo.error = false;
        draft.publicInfo.info = false;
        break;
      case LOAD_PUBLIC_INFO_SUCCESS:
        draft.publicInfo.info = action.publicInfo;
        draft.publicInfo.loading = false;
        break;
      case LOAD_PUBLIC_INFO_ERROR:
        draft.publicInfo.error = action.error;
        draft.publicInfo.loading = false;
        break;
      // Professional Skills:
      case LOAD_PROFESSIONAL_SKILLS:
        draft.professionalSkills.loading = true;
        draft.professionalSkills.error = false;
        draft.professionalSkills.professionalSkills = false;
        break;
      case LOAD_PROFESSIONAL_SKILLS_SUCCESS:
        draft.professionalSkills.professionalSkills = action.professionalSkills;
        draft.professionalSkills.loading = false;
        break;
      case LOAD_PROFESSIONAL_SKILLS_ERROR:
        draft.professionalSkills.error = action.error;
        draft.professionalSkills.loading = false;
        break;
      // Language Skills:
      case LOAD_LANGUAGE_SKILLS:
        draft.languageSkills.loading = true;
        draft.languageSkills.error = false;
        draft.languageSkills.languageSkills = false;
        break;
      case LOAD_LANGUAGE_SKILLS_SUCCESS:
        draft.languageSkills.languageSkills = action.languageSkills;
        draft.languageSkills.loading = false;
        break;
      case LOAD_LANGUAGE_SKILLS_ERROR:
        draft.languageSkills.error = action.error;
        draft.languageSkills.loading = false;
        break;
      // Other Interests:
      case LOAD_OTHER_INTERESTS:
        draft.otherInterests.loading = true;
        draft.otherInterests.error = false;
        draft.otherInterests.otherInterests = false;
        break;
      case LOAD_OTHER_INTERESTS_SUCCESS:
        draft.otherInterests.otherInterests = action.otherInterests;
        draft.otherInterests.loading = false;
        break;
      case LOAD_OTHER_INTERESTS_ERROR:
        draft.otherInterests.error = action.error;
        draft.otherInterests.loading = false;
        break;
      // Educations:
      case LOAD_EDUCATIONS:
        draft.educations.loading = true;
        draft.educations.error = false;
        draft.educations.educations = false;
        break;
      case LOAD_EDUCATIONS_SUCCESS:
        draft.educations.educations = action.educations;
        draft.educations.loading = false;
        break;
      case LOAD_EDUCATIONS_ERROR:
        draft.educations.error = action.error;
        draft.educations.loading = false;
        break;
      // Educations:
      case LOAD_EXPERIENCES:
        draft.experiences.loading = true;
        draft.experiences.error = false;
        draft.experiences.experiences = false;
        break;
      case LOAD_EXPERIENCES_SUCCESS:
        draft.experiences.experiences = action.experiences;
        draft.experiences.loading = false;
        break;
      case LOAD_EXPERIENCES_ERROR:
        draft.experiences.error = action.error;
        draft.experiences.loading = false;
        break;
    }
  });

export default cvReducer;
