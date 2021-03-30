import { createActions } from 'redux-actions';
import * as API from 'api';

const options = {
  prefix: 'FLOW',
};

const flowActions = createActions(
  {
    SET_LOADING: undefined,
    SET_ERROR: undefined,
    SET_FLOW: undefined,
    SET_FLOW_BY_CATEGORY: undefined,
    SET_PAGE: undefined,
    SET_CATEGORY: undefined,
  },
  options,
);

const getFlow = (page, itemsPerPage, category) => async (dispatch) => {
  try {
    dispatch(flowActions.setLoading(true));
    const data = await API.getFlow({
      page,
      limit: itemsPerPage,
      category,
    });
    dispatch(flowActions.setFlow(data.data || []));
    dispatch(flowActions.setLoading(false));
  } catch (error) {
    dispatch(flowActions.setError(error));
  }
};

const getFlowByCategory = (page, itemsPerPage, category) => async (dispatch) => {
  try {
    dispatch(flowActions.setLoading(true));
    const data = await API.getFlow({
      page,
      limit: itemsPerPage,
      category,
    });
    dispatch(flowActions.setFlowByCategory(data.data || []));
    dispatch(flowActions.setLoading(false));
  } catch (error) {
    dispatch(flowActions.setError(error));
  }
};


const actions = {
  ...flowActions,
  getFlow,
  getFlowByCategory,
};

export default actions;
