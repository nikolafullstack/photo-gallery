import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowBackIos, FilterList, MoreHoriz, Publish, PersonAddRounded } from '@material-ui/icons';

import flowActions from 'redux/flow/actions';
import * as flowSelectors from 'redux/flow/selectors';

import User1Img from 'assets/images/user1.png';
import User2Img from 'assets/images/user2.png';
import User3Img from 'assets/images/user3.png';
import { CATEGORY_FILTERS } from 'constants/pages';

function Header() {
  const dispatch = useDispatch();
  const itemsPerPage = useSelector(flowSelectors.selectItemsPerPage);

  const changeCategory = (category) => {
    dispatch(flowActions.setPage(1));
    dispatch(flowActions.setCategory(category.value));
    dispatch(flowActions.getFlowByCategory(1, itemsPerPage, category.value));
  };

  return (
    <div className="app-header">
      <div className="app-header__back">
        <ArrowBackIos />
      </div>
      <div className="app-header__options">
        <Select
          options={CATEGORY_FILTERS}
          className="app-header__select"
          placeholder="Category..."
          onChange={changeCategory}
        />
        <div className="app-header__options__inner">
          <div className="app-header__options__filter">
            <FilterList />
          </div>
          <div className="app-header__options__users">
            <img src={User1Img} alt="" />
            <img src={User2Img} alt="" />
            <img src={User3Img} alt="" />
          </div>
          <div className="app-header__options__add-user">
            <PersonAddRounded />
          </div>
          <div className="app-header__options__upload">
            <Publish />
          </div>
          <div className="app-header__options__menu">
            <MoreHoriz />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
