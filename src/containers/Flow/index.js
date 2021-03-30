import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';

import flowActions from 'redux/flow/actions';
import * as flowSelectors from 'redux/flow/selectors';
import FlowItem from './FlowItem';

function Flow() {

  const dispatch = useDispatch();
  const flow = useSelector(flowSelectors.selectFlow);
  const page = useSelector(flowSelectors.selectPage);
  const loading = useSelector(flowSelectors.selectLoading);
  const itemsPerPage = useSelector(flowSelectors.selectItemsPerPage);
  const category = useSelector(flowSelectors.selectCategory);

  const breakpointColumnsObj = {
    default: 4,
    1040: 3,
    768: 2,
    500: 1
  };

  const setPage = (pageToLoad) => {
    dispatch(flowActions.setPage(pageToLoad));
  };

  useEffect(() => {
    dispatch(flowActions.getFlow(page, itemsPerPage, category));
  }, [page]);

  return (
    <div className="app-flow">
      <div className="app-flow__title">
        Candy cotton candy sesame snaps biscuit
      </div>
      <div className="app-flow__description">
        Candy cotton candy sesame
        <div className="app-flow__description__tag">#Design</div>
        <div className="app-flow__description__tag">#HR</div>
        biscuit dessert topping halvah marshmallow <br />
        gummies. Pie toffee dragée chocolate toffee biscuit. Icing chocolate cake ice cream jelly <br />
        beans chocolate cake soufflé candy.
      </div>
      <div className="app-flow__grid">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="app-flow__grid__masonry"
          columnClassName="app-flow__grid__masonry_column"
        >
          {flow.map(item => {
            return <FlowItem key={item.id} { ...item } />
          })}
        </Masonry>
      </div>

      {/*Hardcoded only for mock api, because it doesn't return the total length of the items */}
      {flow.length < 100 && (
        <button disabled={loading} className="app-flow__load-more" type="button" onClick={() => {setPage(page + 1)}}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}

export default Flow;
