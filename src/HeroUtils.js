import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

import {apiEndpoint, accessToken } from "constants";

export const linkResolver = function(doc) {
  // Pretty URLs for known types
  if (doc.type === "infoboks") return "info/" + doc.uid;

  // Fallback for other types, in case new custom types get created
  return "/doc/" + doc.id;
};
/** See prismic docs  */
export const html = document =>
  RichText.render(document.data.text_field, linkResolver);

export const accessDocument = async (docType, page) => {
  
  page = page || 1;
  return Prismic.api(apiEndpoint, { accessToken }).then(api => {
    return api
      .query(Prismic.Predicates.at("document.type", docType), {
        pageSize: 100,
        page: page
      })
      .then(response => {
        if (response) {
          return response.results.map(result => result.data);
        }
      });
  });
};
