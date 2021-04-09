import { gql } from '@apollo/client';

export const EXCHANGE_COURSES = gql`
  query GetExchangeCourses {
    getCourses {
      _id
      title
      teacher
      description
    }
  }
`;