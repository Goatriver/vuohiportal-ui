/**
 *
 * SocialsBar
 *
 */

import React, { memo } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, IconButton } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PropTypes from 'prop-types';
import { Facebook, GitHub, Instagram, LinkedIn } from '@material-ui/icons';

import LoadingLoading from "../LoadingLoading";
import useStyles from './styles';

function SocialsBar(props) {
  const classes = useStyles();
  const { socials } = props;

  const getIcon = service => {
    let icon = null;
    switch (service) {
      case 'GITHUB':
        icon = <GitHub className={classes.tile} fontSize="large" />;
        break;
      case 'LINKEDIN':
        icon = <LinkedIn className={classes.tile} fontSize="large" />;
        break;
      case 'INSTA':
        icon = <Instagram className={classes.tile} fontSize="large" />;
        break;
      case 'FACE':
        icon = <Facebook className={classes.tile} fontSize="large" />;
        break;
      default:
        icon = null;
        break;
    }
    return icon;
  };
  if (socials) {
    return (
      <Card className={classes.root}>
        <CardContent>
          <GridList cols={socials.length} className={classes.list}>
            {socials.map(social => (
              <GridListTile key={social.service} className={classes.tile}>
                <a href={social.url} target="_blank">
                  <IconButton>{getIcon(social.service)}</IconButton>
                </a>
              </GridListTile>
            ))}
          </GridList>
        </CardContent>
      </Card>
    );
  }
  return <LoadingLoading />;
}

SocialsBar.propTypes = {
  socials: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default memo(SocialsBar);
