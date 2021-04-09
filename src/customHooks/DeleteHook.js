import { useCallback } from 'react'
import { DELETE_COURSE } from '../Mutations';
import { useMutation } from '@apollo/client';

export const DeleteHook = (setState) => {
  const [deleteCourse] = useMutation(DELETE_COURSE);

  const remove = useCallback(async (state, id) => {
    await deleteCourse({ variables: { id }})
    const filterArray = state.filter(item => item._id !== id)
    setState(filterArray)
  }, [setState, deleteCourse])
  return { remove }
}