import axios from 'axios';

const KEY = 'AIzaSyDmtk2suEwte0jw6gW2tO7gZa035Sct-posting'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
