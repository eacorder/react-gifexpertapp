export const getGifs = async (category) => {
    //  const apiKey = 'BsFck7X8ZOxEk5stEpBkPUjyo9mdWelF';

    //const peticion = fetch(`api.giphy.com/v1/gifs/search?api_key=${apiKey}`);
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=BsFck7X8ZOxEk5stEpBkPUjyo9mdWelF`
    const resp = await fetch(url)
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    }) 
    return gifs;
}