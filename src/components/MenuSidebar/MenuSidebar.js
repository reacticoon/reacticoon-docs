import React from 'react';

import SectionComponent from './SectionComponent';

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

    const { sectionList, createLink, closeParentMenu, location } = this.props;

    return (
      <div>
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

export default MenuSidebar;
