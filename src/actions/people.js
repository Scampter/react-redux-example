export const LOAD_PEOPLE = 'LOAD_PEOPLE';
export const loadPeople = (page = null) => {
  return {
    type: LOAD_PEOPLE,
    page,
  }
}

export const LOAD_PEOPLE_SUCCESS = 'LOAD_PEOPLE_SUCCESS';
export const loadPeopleSuccess = (response) => {
  return {
    type: LOAD_PEOPLE_SUCCESS,
    payload: response,
  }
}
