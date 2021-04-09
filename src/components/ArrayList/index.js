import React, { useState } from 'react';
// Components
import { Item } from './Item';

export const ArrayList = ({ state, onEdit, onDelete }) => {
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (course, edit) => {
    setAnchorEl(null);
    edit ? onEdit(course) : onDelete(course)
  };

  return (
    state.map((course, index) => (
      <Item key={index}
        course={course}
        ITEM_HEIGHT={ITEM_HEIGHT}
        open={open}
        anchorEl={anchorEl}
        handleClick={handleClick}
        handleClose={handleClose}
        />
    ))
  )
}