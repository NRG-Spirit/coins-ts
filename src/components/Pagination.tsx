import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { setPage } from '../redux/shopReducer';

export default function Pagination() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.shop.filter._page);
  const itemPerPage = useAppSelector((state) => state.shop.filter._limit);
  const itemTotalAmount = useAppSelector((state) => state.goods.totalCount);
  const firstPage = 1;

  function switchPage(page: number) {
    dispatch(setPage(page));
  }

  if (currentPage && itemPerPage && itemTotalAmount) {
    let previousPage = currentPage - 1;
    let nextPage = currentPage + 1;

    const lastPage = Math.ceil(itemTotalAmount / itemPerPage);
    if (previousPage < firstPage) { previousPage = firstPage; }
    if (nextPage > lastPage) { nextPage = lastPage; }

    return (
      <div className="pagination_wrapper">
        {(firstPage < currentPage) &&
          <button className="pagination_first" onClick={() => switchPage(firstPage)}>
            &#60;&#60; {firstPage}
          </button>
        }
        {(previousPage > firstPage && previousPage < currentPage) &&
          <button className="pagination_previous" onClick={() => switchPage(previousPage)}>
            &#60; {previousPage}
          </button>
        }
        <button className="pagination_current">{currentPage}</button>
        {(nextPage < lastPage && nextPage > currentPage) &&
          <button className="pagination_next" onClick={() => switchPage(nextPage)}>
            {nextPage} &#62;
          </button>
        }
        {(lastPage > currentPage) &&
          <button className="pagination_last" onClick={() => switchPage(lastPage)}>
            {lastPage} &#62;&#62;
          </button>
        }
      </div>
    );
  }
  else return <></>;
}
