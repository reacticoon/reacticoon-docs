import React from 'react';
import { Link } from 'gatsby';
import slugify from 'utils/slugify';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const docLinkStyles = theme => ({
  root: {
    textDecoration: 'none',
    color: '#1a1a1a',
    display: 'inline-block',
    borderBottom: '1px solid #0000',
    transition: 'border 0.2s ease',
    marginTop: '5px',

    '&:hover': {
      color: theme.colors.subtle,
    },
  },
  active: {
    color: theme.colors.black,
    fontWeight: 500,
  },
});

const DocLink = withStyles(docLinkStyles)(
  ({ isActive, item, section, classes }) => (
    <Link
      to={slugify(item.id, section.directory)}
      className={classNames(classes.root, {
        [classes.active]: isActive,
      })}
    >
      {/* TODO: style active */}
      {isActive && <span />}
      {item.title}
    </Link>
  )
);

export default DocLink
