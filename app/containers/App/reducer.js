import produce from 'immer';
import { TOGGLE_DRAWER } from './constants';

// The initial state of the App
export const initialState = {
  drawerOpen: false,
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case TOGGLE_DRAWER:
        // Toggle drawer open state:
        // eslint-disable-next-line no-param-reassign
        draft.drawerOpen = !state.drawerOpen;
        break;
    }
  });

export default appReducer;
