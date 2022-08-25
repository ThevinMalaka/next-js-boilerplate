import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'

import { testAction } from './actions';
import { getIsLoggedIn } from './selectors';

const HomeView = (t) => {
  const status = useSelector(state => getIsLoggedIn(state));

  console.log('statusstatus', status);

  const dispatch = useDispatch();

  const test = useCallback(
    info => {
      dispatch(testAction(info));
    },
    [dispatch]
  );

  return (
    <>
    <h2
      onClick={() => {
        test(!status);
      }}>
      Test Action
    </h2>
     {/* <Link href="/about">
      <a>About</a>
    </Link> */}
   </>
  );
};

export default HomeView;
