//리덕스 안에 들어가는 모듈들은 다 소문자로 시작한다
// myschedule.js

import moment from "moment";

// Actions
const LOAD = "myschedule/LOAD";
const CREATE = "myschedule/CREATE";
const DELETE = "myschedule/DELETE";
//initial state를 만들어준다
const initialState = {
  events: [
    {
      todo_id: "dummy_id1111", // 아이디는 나중에 디비에 저장되면, 그때 가져와야죠! 일단 가짜로 둡니다!
      title: "ff",
      date: moment("2021-03-23").format("YYYY-MM-DD hh:mm:ss"), //내 데이터 형식으로 가져와야함
      completed: false,
    },
    {
      todo_id: "dummy_id1111", // 아이디는 나중에 디비에 저장되면, 그때 가져와야죠! 일단 가짜로 둡니다!
      title: "몰라",
      date: moment("2021-03-12").format("YYYY-MM-DD hh:mm:ss"), //내 데이터 형식으로 가져와야함
      completed: false,
    },
  ],
};

// Action Creators
// Reducer를 export default로 빼낼 것이기 때문에 Action Creators는 export로 내보낸다
export const loadMyschedule = (myschedule) => {
  "";
  return { type: LOAD, myschedule };
};

export const createMyschedule = (myschedule) => {
  return { type: CREATE, myschedule };
};

export const deleteMyschedule = (myschedule) => {
  return { type: DELETE, myschedule };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "myschedule/LOAD": {
      return state;
    }

    case "myschedule/CREATE": {
      console.log(state);
      console.log(action);
      const new_events_list = [...state.events, action.myschedule];
      return { events: new_events_list };
    }

    // case "myschedule/DELETE": {
    //   //
    //   return state;
    // }
    default:
      return state;
  }
}
