import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsPokemonsLoading,
  selectPokemons,
} from "../../store/pokemons/pokemonsSelectors";

import Spinner from "../../components/Spinner/Spinner";

import "./PokemonsPreview.scss";
import PokemonsPreviewContent from "../../components/PokemonsPreviewContent/PokemonsPreviewContent";
import ReactPaginate from "react-paginate";
import FormInput from "../../components/FormInput/FormInput";

const PokemonsPreview = () => {
  const pokemonsArray = useSelector(selectPokemons);
  const [searchText, setSearchText] = useState("");
  const isLoading = useSelector(selectIsPokemonsLoading);
  const [pokemons, setPokemons] = useState(pokemonsArray);
  const location = useLocation();
  let offset = location.state?.itemOffset;
  const itemsPerPage = 20;
  const [itemOffset, setItemOffset] = useState(offset || 0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = pokemons.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(pokemons.length / itemsPerPage);

  useEffect(() => {
    setPokemons(
      pokemonsArray.filter((pokemon) => pokemon.name.includes(searchText))
    );
  }, [pokemonsArray, searchText]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % pokemons.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  return (
    <div className="pokemon-preview_page">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="pokemon-preview-page_container">
          <FormInput
            onChange={handleSearchChange}
            classes="pokemon-preview_search"
            name="searchBox"
            type="text"
            value={searchText}
            placeholder="Search..."
          />
          <PokemonsPreviewContent pokemons={currentItems} page={itemOffset} />
        </div>
      )}
      <div className="pagination_container">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pokemon-preview_pagination"
          forcePage={itemOffset / 20}
          pageLinkClassName="page-link"
          activeLinkClassName="page-num-pagination-active"
          previousLinkClassName="prev-link"
          nextLinkClassName="next-link"
          breakLinkClassName="break-link"
        />
      </div>
    </div>
  );
};

export default PokemonsPreview;
