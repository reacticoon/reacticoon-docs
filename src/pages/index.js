import React from 'react';
import ReactDOM from 'react-dom';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withRoot from '../withRoot';
import ReacticoonLogo from 'components/ReacticoonLogo';
import mountCodeExample from 'utils/mountCodeExample';

import Layout from '../components/layout';

const styles = theme => ({
  header: {
    backgroundColor: theme.colors.dark,
    [theme.breakpoints.up('sm')]: {
      paddingTop: '60px',
      paddingBottom: '70px',
    },
    color: 'white',
    textAlign: 'center',
  },
  brand: {
    color: theme.colors.brand,
    letterSpacing: '0.01em',
  },
  brandDescription: {
    color: 'rgb(255, 255, 255)',
    paddingTop: 15,
    textAlign: 'center',
    fontSize: 24,
    letterSpacing: '0.01em',
    fontWeight: '200',
  },
  brandActions: {
    paddingTop: 40,
  },
  brandActionsGetStarted: {
    display: 'inline-block',
    fontSize: 20,
    backgroundColor: theme.colors.brand,
    whiteSpace: 'nowrap',
    color: 'black',
    padding: '15px 25px',
    transition: 'background-color 0.2s ease-out 0s',
    textTransform: 'none',
    textDecoration: 'none',

    '&:hover': {
      background: 'white',
      color: 'black',
    },
  },
  content: {
    width: '90%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 400,
  },
  marketing: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
  },
  marketingComponent: {
    marginLeft: 40,
  },
  marketingComponentTitle: {
    marginBottom: '20px',
    color: '#6d6d6d',
    paddingTop: '0',
    fontWeight: '300',
    fontSize: '24px',
  },
  marketingComponentContent: {
    marginTop: theme.spacing.unit * 2,
    maxWidth: '42em',

    '& p': {
      fontSize: 17,
      lineHeight: '1.7',
    },

    '& a': {
      ...theme.app.link,
    },
  },
  discover: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: theme.spacing.unit * 4,

    '& section': {
      maxWidth: 600,
      float: 'left',
      marginRight: theme.spacing.unit * 2,

      '& a': {
        ...theme.app.link,
      },
    },

    '& h3': {
      color: 'rgb(40, 44, 52)',
      maxWidth: '11em',
      paddingTop: '0px',
      fontSize: 25,
      lineHeight: 1.3,
    },
    '& p, & li': {
      lineHeight: 1.7,
      fontSize: 17,
    },
  },
  examples: {
    paddingTop: theme.spacing.unit * 4,

    '& section': {
      marginTop: theme.spacing.unit * 6,
    },

    '& h3': {
      color: 'rgb(40, 44, 52)',
      maxWidth: '11em',
      paddingTop: '0px',
      fontSize: 25,
      lineHeight: 1.3,
    },

    '& p, & li': {
      lineHeight: 1.7,
      fontSize: 17,
    },
  },
  examplesContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  examplesContentText: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 43%',
  },
  examplesContentCode: {
    display: 'flex',
    alignItems: 'stretch',
    flex: '0 0 47%',
    marginLeft: theme.spacing.unit * 6,
    width: '100%',

    '& pre': {
      width: '100%',
    },
  },
  footer: {
    background: theme.colors.dark,
    color: theme.colors.white,
    paddingTop: 50,
    paddingBottom: 50,

    display: 'flex',
    flexDirection: 'row',
    flexGrow: '0',
    flexShrink: '1',
    flexBasis: '50%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

class IndexPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    const { data } = props;

    const examples = data.examples.edges.map(({ node }) => ({
      content: node.html,
      id: node.fields.slug.replace(/^.+\//, '').replace('.html', ''),
      title: node.frontmatter.title,
    }));

    const marketing = data.marketing.edges.map(({ node }) => ({
      title: node.frontmatter.title,
      content: node.html,
    }));

    const discover = data.discover.edges.map(({ node }) => ({
      title: node.frontmatter.title,
      content: node.html,
    }));

    const code = data.code.edges.reduce((map, { node }) => {
      map[node.id] = JSON.parse(node.internal.contentDigest);

      return map;
    }, {});

    this.state = {
      code,
      discover,
      examples,
      marketing,
    };
  }

  componentDidMount() {
    const { code, examples } = this.state;

    examples.forEach(({ id }) => {
      renderExamplePlaceholder(id);
    });

    function mountCodeExamples() {
      examples.forEach(({ id }) => {
        mountCodeExample(id, code[id]);
      });
    }

    mountCodeExamples();
  }

  render() {
    const { location, classes } = this.props;

    const { discover, examples, marketing } = this.state;

    return (
      <Layout location={location}>
        <section className={classes.header}>
          <ReacticoonLogo height={200} />

          <Typography className={classes.brand} variant="h2">
            Reacticoon
          </Typography>

          <Typography className={classes.brandDescription}>
            A JavaScript ecosystem for building React and Redux projects
          </Typography>

          <div className={classes.brandActions}>
            <a
              href="/docs/getting-started"
              className={classes.brandActionsGetStarted}
            >
              Get started
            </a>
          </div>
        </section>

        <div className={classes.content}>
          <section className={classes.marketing}>
            {marketing.map((column, index) => (
              <div className={classes.marketingComponent} key={index}>
                <Typography
                  component="h3"
                  className={classes.marketingComponentTitle}
                >
                  {column.title}
                </Typography>

                <div className={classes.marketingComponentContent}>
                  <div dangerouslySetInnerHTML={{ __html: column.content }} />
                </div>
              </div>
            ))}
          </section>

          <div className={classes.discover}>
            {discover.map((section, index) => (
              <section key={index}>
                <h3>{section.title}</h3>

                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              </section>
            ))}
          </div>

          <div className={classes.examples}>
            {examples.map((example, index) => (
              <section key={index}>
                <div className={classes.examplesContent}>
                  <div className={classes.examplesContentText}>
                    <h3>{example.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: example.content }}
                    />
                  </div>

                  {/* We put the example code here */}
                  <div
                    className={classes.examplesContentCode}
                    id={example.id}
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
        <div className={classes.footer}>
          <a
            href="/docs/getting-started"
            className={classes.brandActionsGetStarted}
          >
            Get started
          </a>
        </div>
      </Layout>
    );
  }
}

function renderExamplePlaceholder(containerId) {
  ReactDOM.render(
    <h4>Loading code example...</h4>,
    document.getElementById(containerId)
  );
}

export const pageQuery = graphql`
  query IndexMarkdown {
    marketing: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//home/marketing//" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }

    discover: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//home/discover//" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }

    code: allExampleCode {
      edges {
        node {
          id
          internal {
            contentDigest
          }
        }
      }
    }

    examples: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//home/examples//" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;

export default withRoot(withStyles(styles)(IndexPage));
