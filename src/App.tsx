import React from "react";
import "./App.css";
import NavBar from "./components/common/navbar";
import ProblemsetMain from "./components/pages/problemset/problemset-main";

import { reducer } from "./store/reducer.ts";
import type {
  DifficultyListItemType,
  StateType,
  StatusListItemType,
  SubjectListItemType,
} from "./store/reducer.ts";

/** Icons **/
import AdbIcon from "@mui/icons-material/Adb";

const subjectList: SubjectListItemType[] = [
  { name: "All Topics", isSelected: true, icon: <AdbIcon /> },
  { name: "Quant Aptitude", isSelected: false, icon: <AdbIcon /> },
  { name: "Logical Reasoning", isSelected: false, icon: <AdbIcon /> },
  { name: "Verbal Ability", isSelected: false, icon: <AdbIcon /> },
];
const difficultyList: DifficultyListItemType[] = [
  { name: "Easy" },
  { name: "Medium" },
  { name: "Hard" },
];
const statusList: StatusListItemType[] = [
  { name: "Todo", icon: null },
  { name: "Solved", icon: null },
  { name: "Attempted", icon: null },
];

const initialState: StateType = {
  user: {
    isLoggedIn: false,
    userDetails: {
      userFirstName: null,
      userLasttName: null,
      userEmail: null,
      userProfileImage: null,
    },
  },
  table: {
    filters: {
      subjectList: subjectList,
      listList: [],
      topicList: [],
      patternList: [],
      difficultyList: difficultyList,
      statusList: statusList,
      searchString: "",
    },
    data: [],
  },
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="App">
      <NavBar />
      <ProblemsetMain table={state.table} dispatch={dispatch} />
    </div>
  );
}

export default App;
