import { Dispatch, SetStateAction } from "react";

export type sexStatus = '男性' | '女性';

export type type = {
  checkedButton: sexStatus,
  changeButton: Dispatch<SetStateAction<sexStatus>>,
}

export type inputTaskStatus = string | undefined;

export type useStateProps = {
  inputTask: inputTaskStatus;
  setTask: Dispatch<SetStateAction<inputTaskStatus>>;
}

// type taskListArray<T> = Record<'comment' | 'status', T | ('作業中' | '完了')>;