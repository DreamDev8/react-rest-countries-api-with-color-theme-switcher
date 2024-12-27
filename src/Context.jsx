import { createContext, useContext, useReducer } from "react";

import {
  GET_DATA,
  CHANGE_FILTER_REGION,
  PAGINATE,
  HANDLE_PREV_BTN,
  HANDLE_NEXT_BTN,
  OPEN_MODAL,
  BORDER_MODAL,
  CLOSE_MODAL,
  HANDLE_DARK_MODE,
} from "./actions";

import reducer from "./reducer";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const initialState = {
  countriesData: [],
  filteredCountries: "all",
  filteredRegions: [],
  currentPage: 1,
  itemsPerPage: 16,
  btnsPerPage: 5,
  minBtnPerPage: 0,
  maxBtnPerPage: 5,
  isModal: false,
  selectedCountryModal: null,
  isDarkMode: true,
};

function AppContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  //actions

  function getData(data) {
    dispatch({ type: GET_DATA, payload: { data } });
  }

  function changeFilterRegion(region) {
    dispatch({ type: CHANGE_FILTER_REGION, payload: { region } });
  }

  function paginate(btn) {
    dispatch({ type: PAGINATE, payload: { btn } });
  }

  function handlePrevBtn() {
    dispatch({ type: HANDLE_PREV_BTN });
  }

  function handleNextBtn() {
    dispatch({ type: HANDLE_NEXT_BTN });
  }

  function handleOpenModal(name) {
    dispatch({ type: OPEN_MODAL, payload: { name } });
  }

  function handleBorderModal(border) {
    dispatch({ type: BORDER_MODAL, payload: { border } });
  }

  function handleCloseModal() {
    dispatch({ type: CLOSE_MODAL });
  }

  function handleIsDarkMode() {
    dispatch({ type: HANDLE_DARK_MODE });
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        getData,
        changeFilterRegion,
        paginate,
        handlePrevBtn,
        handleNextBtn,
        handleOpenModal,
        handleBorderModal,
        handleCloseModal,
        handleIsDarkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;
