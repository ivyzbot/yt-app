import axios from 'axios';

const KEY = 'AIzaSyDIQ4gTvym19ikN6LaTMk5CffYAWF4M2bk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
