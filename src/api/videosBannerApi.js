const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

async function translateCategory(text) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(
    text
  )}`;
  const res = await fetch(url);
  const data = await res.json();
  return data[0][0][0];
}

async function takeImagesForBanner(category) {
  const categoryInEnglish = await translateCategory(category);
  const url = `https://api.pexels.com/v1/search?query=${categoryInEnglish}&per_page=10`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await response.json();
    return data.photos || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { takeImagesForBanner, translateCategory };
