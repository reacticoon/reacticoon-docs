import React from 'react';

import MenuSidebar from '../MenuSidebar';
import findSectionForPath from 'utils/findSectionForPath';
import { withStyles } from '@material-ui/core/styles';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import MarkdownHeader from 'components/MarkdownHeader';
import NavigationFooter from 'components/NavigationFooter';
import createOgUrl from 'utils/createOgUrl';

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
  },
  markdownContent: {
      marginTop: theme.spacing.unit * 4,
      '& > p': {
        fontSize: 17,
      },
      '& > p:first-child': {
          fontSize: 24,
          color: '#6d6d6d',
          fontWeight: 300,
      }
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
