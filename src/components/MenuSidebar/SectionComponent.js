import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import isItemActive from 'utils/isItemActive';

const styles = theme => ({
  root: {
    position: 'fixed',
    zIndex: '2',
    height: 'calc(100vh - 60px)',
    overflowY: 'auto',

    backgroundColor: '#f7f7f7',
    opacity: '1 !important',

    marginRight: '-999px',
    paddingRight: '999px',

    transition: 'opacity 0.5s ease',
  },
  title: {
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '3',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#1a1a1a',
    marginLeft: theme.spacing.unit * 4,
  },
  itemsList: {
    listStyle: 'none',
    marginTop: 0,
  },
  subItemsList: {
    marginLeft: 20,
  },
  item: {
    fontSize: 16,
  },
  activatedSubItem: {
    width: '4px',
    height: '25px',
    borderLeft: `4px solid ${theme.colors.main}`,
    paddingLeft: '16px',
    position: 'absolute',
    marginTop: '-3px',
  },
});

class SectionComponent extends React.Component {
  state = { uid: ('' + Math.random()).replace(/\D/g, '') };

  render() {
    const {
      activeItemId,
      createLink,
      isActive,
      isScrollSync,
      location,
      onLinkClick,
      onSectionTitleClick,
      section,
      classes,
    } = this.props;
    const uid = 'section_' + this.state.uid;

    return (
      <div className={classes.root}>
        <button
          aria-expanded={isActive}
          aria-controls={uid}
          style={{
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 0,
            marginTop: 10,
          }}
          onClick={onSectionTitleClick}
        >
          <div className={classes.title}>
            {section.title}

            {/* TODO: icon */}
          </div>
        </button>

        <ul id={uid} className={classes.itemsList}>
          {section.items.map((item, index) => (
            <li key={item.id} className={classes.item}>
              <React.Fragment>
                {createLink({
                  isActive: isScrollSync
                    ? activeItemId === item.id
                    : isItemActive(location, item),
                  item: section.isOrdered
                    ? {
                        ...item,
                        title: `${index + 1}. ${item.title}`,
                      }
                    : item,
                  location,
                  onLinkClick,
                  section,
                })}

                {item.subitems && (
                  <ul className={classes.subItemList}>
                    {item.subitems.map(subitem => (
                      <li key={subitem.id} className={classes.item}>
                        {isActive && (
                          <span className={classes.activatedSubItem} />
                        )}

                        {createLink({
                          isActive: isScrollSync
                            ? activeItemId === subitem.id
                            : isItemActive(location, subitem),
                          item: subitem,
                          location,
                          onLinkClick,
                          section,
                        })}
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(SectionComponent);
