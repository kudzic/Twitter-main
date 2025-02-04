import "./searchForm.scss";

const SearchForm = () => {
  return (
    <form
      className="search-form flex flex-row items-center rounded-full"
      action=""
    >
      <div className="text-gray pl-5">
        <svg viewBox="0 0 24 24" width="19">
          <g>
            <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
          </g>
        </svg>
      </div>
      <div className="grow">
        <input
          className="p-3 bg-transparent w-full text-dark"
          type="text"
          autoComplete="off"
          autoCorrect="off"
          placeholder="Search Chirpfy"
        />
      </div>
    </form>
  );
};

export default SearchForm;
