import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import isItemActive from 'utils/isItemActive';

const styles = theme => ({
  root: {
    // backgroundColor: '#f7f7f7',
    opacity: '1 !important',
    display: 'block',
    padding: '0',
    paddingTop: theme.spacing.unit,
  },
  title: {
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '3',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#393939',
    // marginLeft: theme.spacing.unit * 4,
  },
  itemsList: {
    listStyle: 'none',
    marginTop: 0,
    paddingLeft: 0,
    marginLeft: theme.spacing.unit / 2,
  },
  subItemsList: {},
  item: {
    fontSize: 16,
    padding: '4px 0',
  },
  itemLink_root: {
    color: '#717171',
    transition: 'color .3s',

    '&:hover': {
      color: 'black',
    },
  },
  itemLink_active: {
    color: 'black'
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
      // onSectionTitleClick,
      section,
      classes,
    } = this.props;
    const uid = 'section_' + this.state.uid;

    return (
      <div className={classes.root}>
        <div className={classes.title}>
          {section.title}

          {/* TODO: icon */}
        </div>

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
                  classes: { root: classes.itemLink_root, active: classes.itemLink_active },
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
