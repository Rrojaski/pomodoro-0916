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
} from "../actions/types";

const initialState = {
  timerId: 0,
  timerRunning: false,
  currentTime: "25 : 00",
  cycle: "Session",
  workTime: 25,
  breakTime: 5,
  sound: "on"
};

export const timeReducer = (state = initialState, { type, payload }) => {
  console.log("timeReducer...");
  switch (type) {
    case SESSION_ADD:
      return { ...state, workTime: payload };
      break;
    case SESSION_REMOVE:
      return { ...state, workTime: payload };
      break;
    case BREAK_ADD:
      return { ...state, breakTime: payload };
      break;
    case BREAK_REMOVE:
      return { ...state, breakTime: payload };
      break;
    case SET_TIMER_ID:
      return { ...state, timerId: payload };
      break;
    case SET_TIMER_RUN:
      return { ...state, timerRunning: payload };
      break;
    case SET_CURRENT_TIME:
      return { ...state, currentTime: payload };
      break;
    case SET_CYCLE:
      return { ...state, cycle: payload };
      break;
    default:
      return state;
  }
};
