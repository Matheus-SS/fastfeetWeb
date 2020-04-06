import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function recipient(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@recipient/SAVE_RECIPIENT_REQUEST': {
        draft.profile = action.payload.data;
        break;
      }
      case '@recipient/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      default:
        return state;
    }
  });
}
