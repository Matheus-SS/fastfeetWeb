export function registerRequest(
  name,
  complement,
  number,
  street,
  city,
  state,
  zip_code
) {
  return {
    type: '@recipient/REGISTER_REQUEST',
    payload: { name, complement, number, street, city, state, zip_code },
  };
}

export function deleteRecipientRequest(id) {
  return {
    type: '@recipient/DELETE_REQUEST',
    payload: { id },
  };
}

export function sendIdRecipientRequest(id) {
  return {
    type: '@recipient/SEND_ID_RECIPIENT',
    payload: { id },
  };
}

export function saveRecipientRequest(data) {
  return {
    type: '@recipient/SAVE_RECIPIENT_REQUEST',
    payload: { data },
  };
}

export function updateProfileRequest(data) {
  return {
    type: '@recipient/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@recipient/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@recipient/FAILURE_PROFILE_REQUEST',
  };
}
