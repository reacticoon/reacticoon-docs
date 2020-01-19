import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import SectionComponent from './SectionComponent';

const styles = theme => ({
  root: {
    display: 'block',
    padding: '0',
    paddingTop: '8px',
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: 240,
      maxWidth: 240,
    }
  },
});

class MenuSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      activeSection: props.defaultActiveSection,
    };
  }

  handleOpenNavMenu = () => {
    this.setState({ open: !this.state.open });
  };

  handleCloseNavMenu = () => {
    this.setState({ open: false });
  };

  handleToggleSection(section) {
    this.setState(state => ({
      activeSection: state.activeSection === section ? null : section,
    }));
  }

  render() {
    const { activeSection } = this.state;

    const {
      sectionList,
      createLink,
      closeParentMenu,
      location,
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        {sectionList.map((section, index) => (
          <SectionComponent
            createLink={createLink}
            isActive={activeSection === section || sectionList.length === 1}
            key={index}
            location={location}
            onLinkClick={closeParentMenu}
            onSectionTitleClick={() => this.handleToggleSection(section)}
            section={section}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(MenuSidebar);
