import { SECRET_API_KEY } from '$env/static/private';

export async function load(url) {
    console.log('id', url.params.id);
    const response = await fetch(
        'https://api.themoviedb.org/3/movie/' + url.params.id + '?api_key=' + SECRET_API_KEY
    );
    const json = await response.json();
    return json;
}