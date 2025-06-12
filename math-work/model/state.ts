export interface State {
  state: string;
  ranges: StateRange[];
}

export interface StateRange {
  start: string;
  end: string;
}
