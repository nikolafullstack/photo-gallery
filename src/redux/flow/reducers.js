import { handleActions } from 'redux-actions';
import flowActions from './actions';

export const flowReducers = handleActions(
  new Map([
    [
      flowActions.setError,
      (state, action) => ({
        ...state,
        error: action.payload,
      })
    ],
    [
      flowActions.setLoading,
      (state, action) => ({
        ...state,
        loading: action.payload,
      })
    ],
    [
      flowActions.setPage,
      (state, action) => ({
        ...state,
        page: action.payload,    
      })
    ],
    [
      flowActions.setCategory,
      (state, action) => ({
        ...state,
        category: action.payload,    
      })
    ],
    [
      flowActions.setFlow,
      (state, action) => ({
        ...state,
        flow: [...action.payload],
      })
    ],
    [
      flowActions.updateFlow,
      (state, action) => ({
        ...state,
        flow: [...state.flow, ...action.payload],
      })
    ],
    [
      flowActions.setFlowByCategory,
      (state, action) => ({
        ...state,
        flow: action.payload,
      })
    ],
  ]),
  {
    loading: false,
    error: null,
    flow: [],
    page: 1,
    itemsPerPage: 12,
    category: '',
  },
);

export default flowReducers;
