export interface Schedule {
  id: number,
  date: Date,
  state: string,
  startHour: number,
  startMin: number,
  finishHour: number,
  finishMin: number,
}
