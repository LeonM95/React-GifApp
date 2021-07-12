export const getGifs = async (category) => {
  //get data from API

  //se usa encodeURI por si la busqueda incluye espacios
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=9QFRYU4nm3tJAIrkjFerTgFhmOjK1iKM`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifts = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifts;
};
