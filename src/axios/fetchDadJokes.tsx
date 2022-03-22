import axios from 'axios';
import wait from '../utils/wait';

interface IResponse {
  next_page: number;
  previous_page: number;
  status: number;
  results: [
    {
      id: number;
      joke: string;
    },
  ];
}

const fetchDadJokes = async (page: number): Promise<IResponse> => {
  try {
    const response: { data: IResponse } = await axios.get<IResponse>(
      `https://icanhazdadjoke.com/search?limit=10&page=${page}`,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    const status = response.data.status;
    if (status !== 200) throw Error(`An unexpected error occurred ${status}`);

    await wait(3000); // waiting for demo purposes
    return response.data;
  } catch (e) {
    throw Error('An unexpected error occurred');
  }
};

export default fetchDadJokes;
