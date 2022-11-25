export const getGifs = async (category) => {
    
    // GET http
    const limit = 5
    const url = `https://api.giphy.com/v1/gifs/search?api_key=nFuzvFxF011VgBBfkdRFy34E9aAwry9Q&q=${category}&limit=${limit}&offset=0&rating=g&lang=en`
    const resp = await fetch(url)
    const { data } = await resp.json()

    // response
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))

    return gifs
  }
  