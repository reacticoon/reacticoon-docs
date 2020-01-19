import React from 'react';

import createOgUrl from 'utils/createOgUrl';
import { generateDocGithubFileUrl } from 'modules/config';
import findSectionForPath from 'utils/findSectionForPath';
import MenuSidebar from '../MenuSidebar';
import { withStyles } from '@material-ui/core/styles';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import MarkdownHeader from 'components/MarkdownHeader';
import NavigationFooter from 'components/NavigationFooter';
import ButtonExternalLink from 'components/ButtonExternalLink';

const styles = theme => ({
  root: {
    backgroundColor: 'white',
    paddingLeft: '20px',
    paddingRight: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  rootContent: {
    maxWidth: '100%',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      flexFlow: 'row nowrap',
      display: 'flex',
      flexGrow: '1',
      minHeight: `calc(100vh - ${theme.app.header.height}px)`,
    },
    [theme.breakpoints.down('md')]: {
      minHeight: `calc(100vh - ${theme.app.header.heightMobile}px)`,
    },
  },
  content: {
    [theme.breakpoints.up('md')]: {
      flexBasis: '784px',
      flexGrow: '0',
      flex: '1 auto',
      maxWidth: '100%',
      minWidth: '0',
    },
    paddingBottom: theme.spacing.unit * 4,
  },
  sidebar: {
    [theme.breakpoints.up('md')]: {
      flex: '1 0 240px',
      display: 'flex',
      justifyContent: 'flex-end',
      height: 'calc(100vh - 50px)',
      position: 'sticky',
      overflowY: 'auto',
      top: '50px',
      margin: `0 ${theme.spacing.unit * 4}px`,
      marginLeft: 0,
      paddingTop: theme.spacing.unit * 4,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none', // TODO: display on mobile
    },
    [theme.breakpoints.down('xs')]: {},
  },
  toc: {
    flex: '1 0 240px',
    alignSelf: 'flex-start',
    display: 'block',
    maxHeight: 'calc(100vh - 90px)',
    overflowY: 'auto',
    position: 'sticky',
    top: '90px',
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
    '& code.language-text': {
      backgroundColor: '#1b1f230d',
      borderRadius: '3px',
      color: 'inherit',
      fontFamily:
        'SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
      fontSize: '85%',
      margin: '0',
      padding: '3.2px 6.4px',
    },
  },
  footer: {},
});

const getPageById = (sectionList, templateFile) => {
  if (!templateFile) {
    return null;
  }

  const sectionItems = sectionList.map(section => section.items);
  const flattenedSectionItems = [].concat.apply([], sectionItems);
  const linkId = templateFile.replace('.html', '');

  const page = flattenedSectionItems.find(item => item.id === linkId);

  if (!page) {
    console.warn(`${templateFile} file not found`)
  }

  return page
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
              <br />
              <ButtonExternalLink
                href={generateDocGithubFileUrl(markdownRemark.fields.path)}
              >
                Improve this documentation
              </ButtonExternalLink>
            </div>
          </div>

          <div className={classes.toc}>{/* TODO: */}</div>
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
