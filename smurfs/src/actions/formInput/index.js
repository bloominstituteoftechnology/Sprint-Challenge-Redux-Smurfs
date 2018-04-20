export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_AGE = "UPDATE_AGE";
export const UPDATE_HEIGHT = "UPDATE_HEIGHT";
export const RESET_INPUT = "RESET_INPUT";

export const updateName = name => {
  return {
    type: UPDATE_NAME,
    payload: name
  }
}

export const updateAge = age => {
  return {
    type: UPDATE_AGE,
    payload: age
  }
}

export const updateHeight = height => {
  return {
    type: UPDATE_HEIGHT,
    payload: height
  }
}

export const resetInput = () => {
  return {
    type: RESET_INPUT
  }
}