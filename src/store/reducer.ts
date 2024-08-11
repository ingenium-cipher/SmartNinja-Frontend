import { UPDATE_SUBJECT_FILTER_ONCLICK } from "../constants/action-types.ts";

export type SubjectListItemType = {
  name: string;
  isSelected: boolean;
  icon: any;
};
export type ListListItemType = any;
export type TopicListItemType = any;
export type PatternListItemType = any;
export type DifficultyListItemType = { name: string };
export type StatusListItemType = { name: string; icon: any };

export type StateType = {
  user: {
    isLoggedIn: boolean;
    userDetails: {
      userFirstName: string | null;
      userLasttName: string | null;
      userEmail: string | null;
      userProfileImage: string | null;
    };
  };
  table: {
    filters: {
      subjectList: SubjectListItemType[];
      listList: ListListItemType[];
      topicList: TopicListItemType[];
      patternList: PatternListItemType[];
      difficultyList: DifficultyListItemType[];
      statusList: StatusListItemType[];
      searchString: string;
    };
    data: [];
  };
};

type ActionType = {
  type: string;
  index?: number;
  value?: any;
};
export type DispatchType = React.Dispatch<ActionType>;

function updateIndex(list: any[], index: number, updatedItem: any) {
  list[index] = updatedItem;
  return list;
}

export function reducer(state: StateType, action: ActionType): StateType {
  if (action.type === UPDATE_SUBJECT_FILTER_ONCLICK) {
    const subjectList: SubjectListItemType[] = state.table.filters.subjectList;
    const idx: number = action.index ?? -1;
    return {
      ...state,
      table: {
        ...state.table,
        filters: {
          ...state.table.filters,
          subjectList: updateIndex(subjectList, idx, {
            ...subjectList[idx],
            isSelected: action.value,
          }),
        },
      },
    };
  }
  throw Error("Unknown action.");
}
