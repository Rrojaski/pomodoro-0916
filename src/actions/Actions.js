import {
  SESSION_ADD,
  SESSION_REMOVE,
  BREAK_ADD,
  BREAK_REMOVE,
  SET_TIMER_ID,
  SET_TIMER_RUN,
  SET_CYCLE,
  TIMER_START,
  SET_CURRENT_TIME
} from "./types";

// WorkControllers
export const incrementWorkTime = payload => {
  console.log("addSession...");
  return {
    type: SESSION_ADD,
    payload: payload + 1
  };
};

export const decrementWorkTime = payload => {
  console.log("addSession...");
  return {
    type: SESSION_REMOVE,
    payload: payload - 1
  };
};

// BreakControllers
export const incrementBreakTime = payload => {
  return {
    type: BREAK_ADD,
    payload: payload + 1
  };
};

export const decrementBreakTime = payload => {
  return {
    type: BREAK_REMOVE,
    payload: payload - 1
  };
};

// App
export const setTimerId = payload => {
  return {
    type: SET_TIMER_ID,
    payload: payload
  };
};

export const setCycle = payload => {
  return {
    type: SET_CYCLE,
    payload: payload
  };
};

export const setTimerRunning = payload => {
  return {
    type: SET_TIMER_RUN,
    payload: payload
  };
};

// Timer
export const startTimer = payload => {
  return {
    type: TIMER_START,
    payload: payload
  };
};

export const setCurrentTime = payload => {
  return {
    type: SET_CURRENT_TIME,
    payload: payload
  };
};

