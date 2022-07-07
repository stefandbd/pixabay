import axios from 'axios';
import Config from 'react-native-config';

export const getPhotosRequest = async (params: {
  queryString: string;
  page: number;
}) => {
  return await axios.get(
    Config.BASE_URL +
      '?key=' +
      Config.API_KEY +
      `&q=${params.queryString}` +
      '&image_type=photo' +
      `&page=${params.page}` +
      '&per_page=10',
  );
};
