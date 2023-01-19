import { COUNTER_DOWN, COUNTER_SET, COUNTER_UP } from "../types";
import { counterInitialState } from "./counter-initial-state";

export const counterReducer = (state = counterInitialState, action) => {
  if (action.type === COUNTER_UP) {
    const newState = { ...state, counter: state.counter + 1 };
    // Oluşturulan yeni state return edildiğinde mevcut state güncellenmiş olur.
    return newState;
  } else if (action.type === COUNTER_DOWN) {
    const newState = { ...state, counter: state.counter - 1 };
    return newState;
  } else if (action.type === COUNTER_SET) {
    const newState = { ...state, counter: action.payload };
    return newState;
  }

  // Bu satır hiç bir if case ine girmediğinde geriye mevcut state i göndersin diye yazıldı
  // Eğer olmazsa tüm state uçar.
  return state;
};
