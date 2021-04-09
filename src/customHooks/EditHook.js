import { useCallback } from 'react'
import { UPDATE_COURSE } from '../Mutations';
import { useMutation } from '@apollo/client';

export const EditHook = (setState) => {
  const [updateCourse] = useMutation(UPDATE_COURSE);

  const edit = useCallback(async (state, id, formData) => {
    await updateCourse({ variables: { id, input: formData } })
    const filterarray = state.map(item => (item._id === id ? { id: item._id, ...formData } : item))
    setState(filterarray)
  }, [setState, updateCourse])
  return { edit }
}