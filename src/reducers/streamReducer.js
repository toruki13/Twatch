/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash';
import {
  FETCH_STREAM,
  CREATE_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload._id]: action.payload };

    case CREATE_STREAM:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, [action.payload]);
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, '_id') };
    default:
      return state;
  }
};
