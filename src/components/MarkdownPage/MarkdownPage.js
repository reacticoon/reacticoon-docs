import React from 'react';

import createOgUrl from 'utils/createOgUrl';
import { generateDocGithubFileUrl } from 'modules/config';
import findSectionForPath from 'utils/findSectionForPath';
import MenuSidebar from '../MenuSidebar';
import { withStyles } from '@material-ui/core/styles';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import MarkdownHeader from 'components/MarkdownHeader';
import NavigationFooter from 'components/NavigationFooter';
import ExternalLink from 'components/ExternalLink';

const styles = theme => ({
  root: {
    maxWidth: 1260,
    [theme.breakpoints.up('md')]: {
      width: '90%',
    },
    paddingLeft: '20px',
    paddingRight: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  rootContent: {
    display: 'flex',
    minHeight: 'calc(100vh - 60px)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingBottom: theme.spacing.unit * 4,
  },
  markdownContent: {
    marginTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 10,

    '& p': {
      margin: '0 0 1em 0',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.46429em',
    },

    '& a': {
      ...theme.app.link,
    },

    '& h1': {
      margin: '0 0 .35em 0',
      color: 'rgba(0, 0, 0, 0.54)',
      fontSize: '2.8125rem',
      fontWeight: '400',
      lineHeight: '1.13333em',
    },

    '& h2': {
      marginTop: theme.spacing.unit * 12,
      marginBottom: theme.spacing.unit * 2,

      margin: '0 0 .35em 0',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: '1.3125rem',
      fontWeight: '500',
      lineHeight: '1.16667em',
    },
    '& h3': {
      marginTop: theme.spacing.unit * 8,
      marginBottom: theme.spacing.unit * 2,

      margin: '0 0 .35em 0',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: '1.1125rem',
      fontWeight: '500',
      lineHeight: '1.16667em',
    },
    '& > p, & > ul, & > li': {
      fontSize: 17,
    },
    '& li': {
      marginTop: theme.spacing.unit,

      '& a': {
        ...theme.app.link,
      },
    },
    '& > table': {
      margin: '0 auto',
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit * 4,

      '& thead tr': {
        '& th': {
          borderBottom: '1px solid #f2f2f2',
          fontSize: 17,
          color: '#333',
          lineHeight: '1.4',
          textTransform: 'uppercase',
          paddingTop: '21px',
          paddingBottom: '21px',
          textAlign: 'left',
          paddingLeft: theme.spacing.unit * 4,
        },
      },
      '& tbody': {
        borderBottom: '1px solid #f2f2f2',

        '& tr:last-child': {
          '& td': {
            borderBottom: '1px solid #f2f2f2',
          },
        },

        '& tr': {
          '& td': {
            fontSize: 17,
            color: '#666',
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            paddingLeft: theme.spacing.unit * 4,

            '& a': {
              ...theme.app.link,
            },
          },
        },
      },
    },
    '& > p:first-child': {
      fontSize: 24,
      color: '#6d6d6d',
      fontWeight: 300,
    },
    '& pre.language-cmd, & pre.language-cli': {
      color: 'white',
      // background: theme.colors.darker,
      background: '#002b36',
      padding: theme.spacing.unit,
    },
    '& pre.language-md': {
      padding: theme.spacing.unit,
    },
  },
  sidebar: {
    [theme.breakpoints.up('md')]: {
      flex: '0 0 300px',
      '-webkit-flex': '0 0 300px',
      borderLeft: '1px solid #ececec',
      marginLeft: '80px',
    },
  },
  footer: {
    maxWidth: 1260,
    [theme.breakpoints.up('md')]: {
      width: '90%',
    },
  },
});

const getPageById = (sectionList, templateFile) => {
  if (!templateFile) {
    return null;
  }

  const sectionItems = sectionList.map(section => section.items);
  const flattenedSectionItems = [].concat.apply([], sectionItems);
  const linkId = templateFile.replace('.html', '');

  return flattenedSectionItems.find(item => item.id === linkId);
};

const MarkdownPage = ({
  markdownRemark,
  sectionList,
  createLink,
  location,
  ogDescription,
  titlePostfix = '',
  classes,
}) => {
  const titlePrefix = markdownRemark.frontmatter.title || '';

  const prev = getPageById(sectionList, markdownRemark.frontmatter.prev);
  const next = getPageById(sectionList, markdownRemark.frontmatter.next);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.rootContent}>
          <div className={classes.content}>
            <TitleAndMetaTags
              ogDescription={ogDescription}
              ogUrl={createOgUrl(markdownRemark.fields.slug)}
              title={`${titlePrefix}${titlePostfix}`}
            />

            <MarkdownHeader title={titlePrefix} />

            <div
              className={classes.markdownContent}
              dangerouslySetInnerHTML={{
                __html: markdownRemark.html,
              }}
            />

            <div>
              <hr />
              <ExternalLink
                href={generateDocGithubFileUrl(markdownRemark.fields.path)}
              >
                Improve this documentation
              </ExternalLink>
            </div>
          </div>
          <div className={classes.sidebar}>
            <MenuSidebar
              sectionList={sectionList}
              createLink={createLink}
              defaultActiveSection={findSectionForPath(
                location.pathname,
                sectionList
              )}
              location={location}
            />
          </div>
        </div>
      </div>

      {(next || prev) && (
        <div className={classes.footer}>
          <NavigationFooter location={location} next={next} prev={prev} />
        </div>
      )}
    </React.Fragment>
  );
};

export default withStyles(styles)(MarkdownPage);
