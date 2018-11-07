import React from 'react';

import { getGithubUrl } from '../../modules/config';
import sectionListDocs from '../../../content/docs/nav.yml';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import DocLink from 'components/DocLink';
import GithubIcon from 'components/svg/GithubIcon';
import FooterBar from '../FooterBar';
import ExternalLink from '../ExternalLink';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  row: {

  },
  link: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '14pt',
    letterSpacing: '0.1em',
    textDecoration: 'none',
  },
  menu: {},
  menuTitle: {
    color: '#999',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: '3',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  menuItemList: {
    listStyle: 'none',
    padding: 0,
    paddingLeft: theme.spacing.unit,
    marginTop: 0,
  },
  menuItem: {
    fontSize: 16,
    lineHeight: '32px',
  },
  menuItemLink: {
    color: 'white',

  },
  rightArea: {
    textAlign: 'right',
  },
  helpUs: {
    display: 'flex',
    alignItems: 'center',
    fill: theme.colors.white,

    '&:hover': {
      color: theme.colors.brand,
      fill: theme.colors.brand,
    },
    '& svg': {
      marginRight: theme.spacing.unit,
    },
  },
  icon: {
    height: 48,
    width: 48,
    fill: 'inherit',
    '&:hover': {
      fill: 'inherit',
    },
  },
});

const IndexFooterBar = ({ classes }) => (
  <FooterBar>
    <div className={classes.root}>
      <div className={classes.row}>
        {/* Menu - Links - Docs */}
        <div className={classes.menu}>
          <span className={classes.menuTitle}>Docs</span>

          <ul className={classes.menuItemList}>
            {sectionListDocs.map(section => {
              const defaultItem = section.items[0];
              return (
                <li className={classes.menuItem} key={section.title}>
                  <DocLink
                    item={defaultItem}
                    section={section}
                    classes={{ root: classes.menuItemLink }}
                  >
                    {section.title}
                  </DocLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={classNames(classes.row, classes.rightArea)}>
        <ExternalLink href={getGithubUrl()} classes={{ root: classNames(classes.helpUs, classes.link) }}>
          <GithubIcon className={classes.icon} />
          Help us!
        </ExternalLink>
      </div>
    </div>
  </FooterBar>
);

export default withStyles(styles)(IndexFooterBar);
