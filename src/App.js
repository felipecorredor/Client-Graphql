import React, { useState, useEffect } from 'react'
// Apollo CLIENT
import { useQuery } from '@apollo/client';
import { EXCHANGE_COURSES } from './Queries';
// Form
import { useForm } from "react-hook-form";
import { Form } from './components/Form';
// CUSTOM HOOKS
import { CreateHook } from './customHooks/CreateHook';
import { EditHook } from './customHooks/EditHook';
import { DeleteHook } from './customHooks/DeleteHook';
import { ArrayList } from './components/ArrayList';
// MATERIAL UI
import { Grid, Container } from '@material-ui/core';

function App() {
  // React.useState
  const [field, setField] = useState({})
  const [state, setState] = useState([])
  const [is_edit, setIsEdit] = useState(false)
  // react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();
  // Query @apollo/client
  const { loading, error, data } = useQuery(EXCHANGE_COURSES);
  // CUSTOM HOOKS
  const { create } = CreateHook(setState)
  const { edit } = EditHook(setState)
  const { remove } = DeleteHook(setState)

  useEffect(() => {
    data ? setState(data.getCourses) : setState([])
  }, [data])

  const onSubmit = formData => {
    is_edit ? edit(state, field._id, formData) : create(state, formData)
  }

  const handleEdit = (course) => {
    setIsEdit(true)
    setField(course)
  }

  const handleDelete = (id) => {
    remove(state, id)
  }

  const handleChange = (e) => {
    setField({
      ...field,
      [e.target.name]: e.target.value
    })
  }

  const createButton = (e) => {
    setIsEdit(false)
    setField({})
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ArrayList state={state}
            onEdit={handleEdit}
            onDelete={handleDelete} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Form onSubmit={handleSubmit(onSubmit)}
            is_edit={is_edit}
            register={register}
            field={field}
            errors={errors}
            onChange={handleChange}
            createButton={createButton} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
