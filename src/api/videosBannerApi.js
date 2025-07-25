import { createClient } from "pexels";
 const API_KEY = "BQYy0lrb2WP67HBaGvQQyZrANnez7cQFQah16C1uqiLOPV9o4KcLwxlI"; 
// const API_KEY = import.meta.env.REACT_APP_PEXELS_API_KEY;
const client = createClient(API_KEY);

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
  try {
    const response = await client.photos.search({
      query: categoryInEnglish,
      per_page: 10,
    });
    return response.photos || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { takeImagesForBanner, translateCategory };
