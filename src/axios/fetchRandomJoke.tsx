import axios, { AxiosResponse } from 'axios';
import wait from '../utils/wait';

interface IResponse {
  value: string;
}

const fetchRandomJoke = async (): Promise<string> => {
  try {
    const response: AxiosResponse<IResponse> = await axios.get<IResponse>(
      'https://api.chucknorris.io/jokes/random',
    );

    await wait(3000); // waiting for demo purposes
    return response.data.value;
  } catch (e) {
    return 'An unexpected error occurred';
  }
};

export default fetchRandomJoke;
