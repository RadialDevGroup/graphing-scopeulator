import _ from 'lodash';

export const onKey = (keyCode) => (funcTrue, funcFalse=_.noop) => (e) => {
  e.keyCode === keyCode ? funcTrue(e) : funcFalse(e);
}

export const onEnter = onKey(13);
export const onDownArrow = onKey(40);
export const onUpArrow = onKey(38);
