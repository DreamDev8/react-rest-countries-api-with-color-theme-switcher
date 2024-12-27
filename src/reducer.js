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

function reducer(state, action) {
  if (action.type === GET_DATA) {
    return {
      ...state,
      countriesData: action.payload.data,
    };
  } else if (action.type === CHANGE_FILTER_REGION) {
    return {
      ...state,
      filteredCountries: action.payload.region,
      currentPage: 1,
      minBtnPerPage: 0,
      maxBtnPerPage: 5,
    };
  } else if (action.type === PAGINATE) {
    return { ...state, currentPage: action.payload.btn };
  } else if (action.type === HANDLE_PREV_BTN) {
    if ((state.currentPage - 1) % state.btnsPerPage === 0) {
      return {
        ...state,
        maxBtnPerPage: state.maxBtnPerPage - state.btnsPerPage,
        minBtnPerPage: state.minBtnPerPage - state.btnsPerPage,
        currentPage: state.currentPage - 1,
      };
    } else {
      return { ...state, currentPage: state.currentPage - 1 };
    }
  } else if (action.type === HANDLE_NEXT_BTN) {
    if (state.currentPage % state.btnsPerPage === 0) {
      return {
        ...state,
        maxBtnPerPage: state.maxBtnPerPage + state.btnsPerPage,
        minBtnPerPage: state.minBtnPerPage + state.btnsPerPage,
        currentPage: state.currentPage + 1,
      };
    } else {
      return { ...state, currentPage: state.currentPage + 1 };
    }
  } else if (action.type === OPEN_MODAL) {
    const selectedCountry = state.countriesData.find((country) => {
      return country.name.common === action.payload.name;
    });
    return {
      ...state,
      selectedCountryModal: selectedCountry,
      isModal: true,
    };
  } else if (action.type === CLOSE_MODAL) {
    return { ...state, isModal: false };
  } else if (action.type === HANDLE_DARK_MODE) {
    return { ...state, isDarkMode: !state.isDarkMode };
  } else if (action.type === BORDER_MODAL) {
    const selectedBorderCountry = state.countriesData.find((country) => {
      return (
        country.borders &&
        country.borders.length > 0 &&
        country.cca3 === action.payload.border
      );
    });
    return {
      ...state,
      selectedCountryModal: selectedBorderCountry,
      isModal: true,
    };
  }
}

export default reducer;
