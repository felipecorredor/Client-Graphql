import React from 'react'
import useStyles from './styles'
import Button from '@material-ui/core/Button';

export const Form = ({ onSubmit, is_edit, register, field, errors, onChange, createButton }) => {
  const classes = useStyles()
  return (
    <div style={{ width: '80%' }}>
      <Button variant="outlined" onClick={createButton}>Create</Button>
      <form onSubmit={onSubmit} autoComplete="off">

        <input value={field.title ?? ''}
          {...register("title")}
          onChange={onChange}
          className={classes.input}
          placeholder="Add Title" />

        <input value={field.teacher ?? ''}
          {...register("teacher")}
          onChange={onChange}
          className={classes.input}
          placeholder="Add Teacher" />

        <input value={field.description ?? ''}
          {...register("description", { required: true })}
          onChange={onChange}
          className={classes.input}
          placeholder="Add Description" />
        {errors.description && <span>This field is required</span>}

        <div className={classes.button}>
          <Button type="submit" variant="outlined" color="primary">
            {is_edit ? 'Edit' : 'Send'}
          </Button>
        </div>

      </form>
    </div>
  )
}