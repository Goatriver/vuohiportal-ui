import { call, put, takeLatest } from 'redux-saga/effects';
import {
  publicInfoLoaded,
  publicInfoLoadingError,
  professionalSkillsLoaded,
  professionalSkillsLoadingError,
  languageSkillsLoaded,
  languageSkillsLoadingError,
  otherInterestsLoaded,
  otherInterestsLoadingError,
  educationsLoaded,
  educationsLoadingError,
  experiencesLoaded,
  experienceLoadingError,
} from './actions';

import request from '../../utils/request';
import {
  LOAD_PUBLIC_INFO,
  LOAD_PROFESSIONAL_SKILLS,
  LOAD_LANGUAGE_SKILLS,
  LOAD_OTHER_INTERESTS,
  LOAD_EDUCATIONS,
  LOAD_EXPERIENCES,
} from './constants';

// Individual exports for testing
export function* getPublicInfo(action) {
  // See example in containers/HomePage/saga.js
  console.log(action.locale);
  const requestURL = `cv/public-info/?lan=${action.locale}`;
  try {
    const publicInfo = yield call(request, requestURL);
    yield put(publicInfoLoaded(publicInfo[0]));
  } catch (err) {
    yield put(publicInfoLoadingError(err));
  }
}

export function* getProfessionalSkills() {
  // See example in containers/HomePage/saga.js
  const requestURL = 'cv/professional-skills/';
  try {
    const professionalSkills = yield call(request, requestURL);
    yield put(professionalSkillsLoaded(professionalSkills));
  } catch (err) {
    yield put(professionalSkillsLoadingError(err));
  }
}

export function* getOtherInterests(action) {
  // See example in containers/HomePage/saga.js
  const requestURL = `cv/other-interests/?lan=${action.locale}`;
  try {
    const otherInterests = yield call(request, requestURL);
    yield put(otherInterestsLoaded(otherInterests));
  } catch (err) {
    yield put(otherInterestsLoadingError(err));
  }
}

export function* getLanguageSkills() {
  // See example in containers/HomePage/saga.js
  const requestURL = 'cv/language-skills/';
  try {
    const languageSkills = yield call(request, requestURL);
    yield put(languageSkillsLoaded(languageSkills));
  } catch (err) {
    yield put(languageSkillsLoadingError(err));
  }
}

export function* getEducations(action) {
  // See example in containers/HomePage/saga.js
  const requestURL = `cv/education/?lan=${action.locale}`;
  try {
    const educations = yield call(request, requestURL);
    yield put(educationsLoaded(educations));
  } catch (err) {
    yield put(educationsLoadingError(err));
  }
}

export function* getExperiences(action) {
  // See example in containers/HomePage/saga.js
  const requestURL = `cv/experience/?lan=${action.locale}`;
  try {
    const experiences = yield call(request, requestURL);
    yield put(experiencesLoaded(experiences));
  } catch (err) {
    yield put(experienceLoadingError(err));
  }
}

export default function* cvData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using 'takeLatest' only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_PUBLIC_INFO, getPublicInfo);
  yield takeLatest(LOAD_PROFESSIONAL_SKILLS, getProfessionalSkills);
  yield takeLatest(LOAD_LANGUAGE_SKILLS, getLanguageSkills);
  yield takeLatest(LOAD_OTHER_INTERESTS, getOtherInterests);
  yield takeLatest(LOAD_EDUCATIONS, getEducations);
  yield takeLatest(LOAD_EXPERIENCES, getExperiences);
}
