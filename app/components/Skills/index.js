/**
 *
 * Skills
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import CvSideBarElement from '../CvSideBarElement';
import Rater from '../Rater';
import LoadingLoading from '../LoadingLoading';

function Skills(props) {
  const { skills, title } = props;
  if (skills) {
    return (
      <CvSideBarElement title={title}>
        {skills.map(skill => (
          <Rater key={skill.name} title={skill.name} stars={skill.level} />
        ))}
      </CvSideBarElement>
    );
  }
  return <LoadingLoading />;
}

Skills.propTypes = {
  skills: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Skills;
