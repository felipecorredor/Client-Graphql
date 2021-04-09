import React from 'react'
// material-ui
import { Typography, Avatar, List, ListItem, Divider, ListItemText, ListItemAvatar } from '@material-ui/core'
import { Menu, MenuItem } from '@material-ui/core'
// Icon
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';

export const Item = ({ course, ITEM_HEIGHT, open, anchorEl, handleClick, handleClose }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={course.teacher}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary">
                {course.title}
              </Typography>
              {` - ${course.description}`}
            </React.Fragment>
          }
        />
        <div>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick} >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
          <MenuItem onClick={() => handleClose(course, "edit")}>
            Update
          </MenuItem>

          <MenuItem onClick={() => handleClose(course._id)}>
            Delete
          </MenuItem>
          </Menu>
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  )
}
