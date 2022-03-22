import React, { FC, useRef } from 'react';
import Layout from '../components/layout';
import Loading from '../components/loading';
import ListItem from '../components/listItem';
import SubNav from '../components/subNav';
import fetchDadJokes from '../axios/fetchDadJokes';
import { useInfiniteQuery } from 'react-query';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const List: FC = () => {
  const { isFetching, data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'dadJokes',
    ({ pageParam = 1 }) => fetchDadJokes(pageParam),
    {
      getPreviousPageParam: (firstPage) => firstPage.previous_page,
      getNextPageParam: (lastPage) => lastPage.next_page,
    },
  );

  const loadMoreButtonRef = useRef<HTMLHeadingElement>(null);
  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage,
  });

  return (
    <Layout>
      <SubNav label="Take me back to Chuck Norris" to="/" />
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.results.map(({ joke, id }) => (
            <ListItem text={joke} key={id} />
          ))}
        </React.Fragment>
      ))}
      <Loading isLoading={isFetching} />
      <div ref={loadMoreButtonRef} />
    </Layout>
  );
};

export default List;
