/*
 *
 * Cv actions
 *
 */

import {
  LOAD_PUBLIC_INFO,
  LOAD_PUBLIC_INFO_ERROR,
  LOAD_PUBLIC_INFO_SUCCESS,
  LOAD_PROFESSIONAL_SKILLS_SUCCESS,
  LOAD_PROFESSIONAL_SKILLS_ERROR,
  LOAD_PROFESSIONAL_SKILLS,
  LOAD_LANGUAGE_SKILLS,
  LOAD_LANGUAGE_SKILLS_ERROR,
  LOAD_LANGUAGE_SKILLS_SUCCESS,
  LOAD_OTHER_INTERESTS_ERROR,
  LOAD_OTHER_INTERESTS_SUCCESS,
  LOAD_OTHER_INTERESTS,
  LOAD_EDUCATIONS,
  LOAD_EDUCATIONS_SUCCESS,
  LOAD_EDUCATIONS_ERROR,
  LOAD_EXPERIENCES,
  LOAD_EXPERIENCES_ERROR,
  LOAD_EXPERIENCES_SUCCESS,
} from './constants';

// Public infos
export function loadPublicInfo(locale) {
  return {
    type: LOAD_PUBLIC_INFO,
    locale,
  };
}

export function publicInfoLoaded(publicInfo) {
  return {
    type: LOAD_PUBLIC_INFO_SUCCESS,
    publicInfo,
  };
}

export function publicInfoLoadingError(error) {
  return {
    type: LOAD_PUBLIC_INFO_ERROR,
    error,
  };
}

// Professional skills
export function loadProfessionalSkills() {
  return {
    type: LOAD_PROFESSIONAL_SKILLS,
  };
}

export function professionalSkillsLoaded(professionalSkills) {
  return {
    type: LOAD_PROFESSIONAL_SKILLS_SUCCESS,
    professionalSkills,
  };
}

export function professionalSkillsLoadingError(error) {
  return {
    type: LOAD_PROFESSIONAL_SKILLS_ERROR,
    error,
  };
}

// Language skills
export function loadLanguageSkills() {
  return {
    type: LOAD_LANGUAGE_SKILLS,
  };
}

export function languageSkillsLoaded(languageSkills) {
  return {
    type: LOAD_LANGUAGE_SKILLS_SUCCESS,
    languageSkills,
  };
}

export function languageSkillsLoadingError(error) {
  return {
    type: LOAD_LANGUAGE_SKILLS_ERROR,
    error,
  };
}

// Other interests
export function loadOtherInterests(locale) {
  return {
    type: LOAD_OTHER_INTERESTS,
    locale,
  };
}

export function otherInterestsLoaded(otherInterests) {
  return {
    type: LOAD_OTHER_INTERESTS_SUCCESS,
    otherInterests,
  };
}

export function otherInterestsLoadingError(error) {
  return {
    type: LOAD_OTHER_INTERESTS_ERROR,
    error,
  };
}

// Education
export function loadEducations(locale) {
  return {
    type: LOAD_EDUCATIONS,
    locale,
  };
}

export function educationsLoaded(educations) {
  return {
    type: LOAD_EDUCATIONS_SUCCESS,
    educations,
  };
}

export function educationsLoadingError(error) {
  return {
    type: LOAD_EDUCATIONS_ERROR,
    error,
  };
}

// Experience
export function loadExperience(locale) {
  return {
    type: LOAD_EXPERIENCES,
    locale,
  };
}

export function experiencesLoaded(experiences) {
  return {
    type: LOAD_EXPERIENCES_SUCCESS,
    experiences,
  };
}

export function experienceLoadingError(error) {
  return {
    type: LOAD_EXPERIENCES_ERROR,
    error,
  };
}
