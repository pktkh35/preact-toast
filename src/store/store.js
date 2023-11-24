import { useEffect, useState } from "preact/hooks";

let memoryState = { toasts: [] }
const listeners = [];

export const reducer = (state, actionType, payload) => {
    switch (actionType) {
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    ...state.toasts,
                    payload.toast
                ]
            }
        case "REMOVE_TOAST":
            return {
                ...state,
                toasts: state.toasts.filter(t => t.toastId !== payload)
            }
        case "UPDATE_TOAST":
            const { toastId, ...newToast } = payload;

            return {
                ...state,
                toasts: state.toasts.map(t => t.toastId !== toastId ? t : { ...t, ...newToast })
            }
    }
};

export const dispatch = (type, payload) => {
    memoryState = reducer(memoryState, type, payload);
    listeners.forEach((listener) => {
      listener(memoryState);
    });
}

export const ADD_TOAST = (payload) => dispatch("ADD_TOAST", payload);
export const REMOVE_TOAST = (payload) => dispatch("REMOVE_TOAST", payload);
export const UPDATE_TOAST = (payload) => dispatch("UPDATE_TOAST", payload);

export const useStore = () => {
  return memoryState.value;
};
