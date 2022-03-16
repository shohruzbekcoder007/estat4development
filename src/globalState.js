import { action, observable } from "mobx";

export const globalState = observable({
  language: "uz",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI1OWNlNWJhMGQxZjFkZTgxOWFjYmUiLCJpYXQiOjE2NDY2MzIxNjV9.hP39ZUOD83TGIv2obZMOxx1m8NrWbPztFLSwuZRIteA"
});

export const setLanguage = action((language) => {
  globalState.language = language;
});


export const setToken = action((token) => {
  globalState.token = token;
});
