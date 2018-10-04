import React from 'react';

import { getGithubUrl } from '../../modules/config';
import sectionListDocs from '../../../content/docs/nav.yml';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DocLink from 'components/DocLink';
import FooterBar from '../FooterBar';
import ExternalLink from '../ExternalLink';

const styles = theme => ({
  link: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '14pt',
    letterSpacing: '0.1em',
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

    '&:hover': {
      color: theme.colors.brand,
    },
  },
  help: {
    textAlign: 'right',
  },
});

const IndexFooterBar = ({ classes }) => (
  <FooterBar>
    <Grid container>
      <Grid item sm={4}>
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
      </Grid>

      <Grid item sm={4} className={classes.help}>
        <ExternalLink href={getGithubUrl()} classes={{ root: classes.link }}>
          Help us!
        </ExternalLink>
      </Grid>
    </Grid>
  </FooterBar>
);

export default withStyles(styles)(IndexFooterBar);
