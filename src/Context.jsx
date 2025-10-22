import { createContext, useContext, useState } from "react";

const SearchContext = createContext("");
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [cuisineList, setCuisineList] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [difficultyList, setDifficultyList] = useState([]);
  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedCuisine,
        setSelectedCuisine,
        cuisineList,
        setCuisineList,
        selectedDifficulty,
        setSelectedDifficulty,
        difficultyList,
        setDifficultyList,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export const useSearch = () => useContext(SearchContext);
