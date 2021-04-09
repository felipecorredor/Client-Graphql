import { useCallback } from 'react'
import { ADD_COURSE } from '../Mutations';
import { useMutation } from '@apollo/client';

export const CreateHook = (setState) => {
  const [createCourse] = useMutation(ADD_COURSE);

  const create = useCallback(async (state, formData) => {
    await createCourse({ variables: { input: formData } })
    setState([...state, { ...formData }])
  }, [setState, createCourse])
  return { create }
}