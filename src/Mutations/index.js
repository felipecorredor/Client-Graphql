import { gql } from '@apollo/client';

export const ADD_COURSE = gql`
  mutation CreateNewCourse($input: CourseInput!)
  { createCourse(input: $input){
      _id
      title
    }
  }
`;

export const UPDATE_COURSE = gql`
  mutation UpdateCourse($id: ID!, $input: CourseInput!) {
    updateCourse(id: $id, input: $input) {
      _id
    }
  }
`;

export const DELETE_COURSE = gql`
  mutation Delete($id: ID) {
    deleteCourse(id: $id){
      _id
    }
  }
`