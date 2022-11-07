import { BehaviorSubject } from 'rxjs'

const initialState = []
const subject = new BehaviorSubject(initialState)
let state = initialState

export const itemsStore = {
  subscribe: (setItemsState) =>
    subject.subscribe((state) => {
      setItemsState(state)
    }),
  addItem: (item) => {
    state = [...state, item]
    subject.next(state)
  },
  initialState,
}
