/**
 *
 * MenuDrawerInner
 *
 */

import React, { memo } from 'react';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import {
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Box from '@material-ui/core/Box';

import messages from './messages';
import HeaderText from '../HeaderText';
import useStyles from './styles';
import { changeLocale } from '../../containers/LanguageProvider/actions';
import { makeSelectLocale } from '../../containers/LanguageProvider/selectors';

function MenuDrawerInner(props) {
  const classes = useStyles();
  const { route, handleChangeLocale, locale } = props;
  const itemList = [
    {
      type: 'item',
      key: 'homeButton',
      to: '/',
      message: (
        <Typography>
          <HeaderText route="/" />
        </Typography>
      ),
      icon: <HomeIcon />,
    },
    {
      type: 'item',
      key: 'cvButton',
      to: '/cv',
      message: (
        <Typography>
          <HeaderText route="/cv" />
        </Typography>
      ),
      icon: <AssignmentIcon />,
    },
  ];

  const handleChange = event => {
    handleChangeLocale(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          <HeaderText route={route} />
        </Typography>
      </div>
      <List>
        {/* eslint-disable-next-line no-unused-vars */}
        {itemList.map((obj, index) => (
          <Link to={obj.to} key={obj.key} className={classes.link}>
            <ListItem button className={obj.to === route ? classes.active : ''}>
              <ListItemIcon>{obj.icon}</ListItemIcon>
              <ListItemText primary={obj.message} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <Box className={classes.langSelect}>
        <FormControl variant="outlined">
          <InputLabel id="lang-select-label">
            <FormattedMessage {...messages.selectLanguage} />
          </InputLabel>
          <Select
            labelId="lang-select-label"
            id="lang-select"
            value={locale}
            onChange={handleChange}
            label={<FormattedMessage {...messages.selectLanguage} />}
          >
            <MenuItem value="fi">Suomi</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

MenuDrawerInner.propTypes = {
  route: PropTypes.string,
  handleChangeLocale: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleChangeLocale: locale => dispatch(changeLocale(locale)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MenuDrawerInner);
