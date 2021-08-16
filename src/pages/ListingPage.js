import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnimes } from "../redux/AnimeActions";

const ListingPage = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [visibleItem, setVisibleItem] = useState(6);
  const dispatch = useDispatch();

  const { animes } = useSelector((state) => ({
    animes: state.animes,
  }));

  useEffect(() => {
    dispatch(fetchAnimes());
  }, [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(fetchAnimes(search));
  };

  const showMore = () => {
    setVisibleItem((prevVisibleItem) => prevVisibleItem + 6);
    if (visibleItem > 8) setShow(!show);
  };

  const showLess = () => {
    setVisibleItem((prevVisibleItem) => prevVisibleItem - 6);
    setShow(!show);
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="text-center">
            <input
              type="text"
              className="anime__input"
              // placeholder="Search for an Anime e.g Naruto"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="button" onClick={handleChange}>
              Go
            </button>
          </div>
          <div className="row mt-5">
            {animes.slice(0, visibleItem).map((anime, i) => (
              <div className="card col-lg-4 mb-5 card__size" key={i}>
                <img
                  src={anime.image_url}
                  className="img-fluid card-img-top drop"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">{anime.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            {visibleItem >= 6 && visibleItem <= 16 ? (
              <button
                type="button"
                className="btn bg-white p-3 mr-5"
                onClick={showMore}
              >
                ShowMore
              </button>
            ) : null}
            {visibleItem >= 12 ? (
              <button
                type="button"
                className="btn bg-white p-3"
                onClick={showLess}
              >
                ShowLess
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPage;
