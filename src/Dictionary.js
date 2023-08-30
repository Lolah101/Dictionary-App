import React, { useState } from "react";
import ImageResults from "./ImageResults";

import "./App.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let key = "t943a9cb00f21f0o68208b41e7202bfc";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);

    //documentation: https://www.shecodes.io/learn/apis/images
    let imageKey = "t943a9cb00f21f0o68208b41e7202bfc";

    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form className="row main-search" onSubmit={search}>
          <div className="col-9 col-sm-10 search-area">
            <input
              className="form-control search-bar"
              placeholder="What word do you want to look up?"
              type="search"
              onChange={handleKeywordChange}
            />
          </div>
          <button
            className="btn col-3 col-sm-2 button-50"
            type="submit"
            onSubmit={search}
          >
            Search
          </button>
        </form>
      </section>
      <Results results={results} />
      <ImageResults photos={photos} />
    </div>
  );
}
