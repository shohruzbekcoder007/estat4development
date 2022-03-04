import { action, observable, toJS } from "mobx";

export const globalState = observable({
  language: "ru",
});

export const setLanguage = action((language) => {
  globalState.language = language;
});
