import { useEffect } from 'react';

const useScrollAndDispatch = (dispatch, action) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(action);
  }, [dispatch, action]);
};

export default useScrollAndDispatch;