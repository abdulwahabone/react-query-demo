import React, { FC } from 'react';
import Layout from '../components/layout';
import Loading from '../components/loading';
import FactContainer from '../components/factContainer';
import Fact from '../components/fact';
import { useQuery } from 'react-query';
import fetchRandomJoke from '../axios/fetchRandomJoke';
import Button from '../components/button';
import SubNav from '../components/subNav';

const Main: FC = () => {
  const { isFetching, data, refetch } = useQuery('facts', fetchRandomJoke);

  return (
    <Layout>
      <FactContainer>
        <Fact isVisible={!isFetching} text={data || ''} />
        <Loading isLoading={isFetching} />
      </FactContainer>
      <Button label="More Facts" onClick={() => refetch()} />
      <SubNav label="Wanna hear some dad jokes instead?" to="/list" />
    </Layout>
  );
};

export default Main;
