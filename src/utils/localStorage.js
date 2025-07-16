export const saveToLocalStorage = (state) => {
  try {
    const stateData = JSON.stringify(state);
    localStorage.setItem("reduxState", stateData);
  } catch (error) {
    console.error("Could not save state", err);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const stateData = localStorage.getItem("reduxState");
    if (stateData === null) return undefined;
    return JSON.parse(stateData);
  } catch (error) {
    console.error("Could not load state", err);
    return undefined;
  }
};
