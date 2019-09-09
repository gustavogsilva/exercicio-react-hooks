export const INCREMENT_LIKE = 'INCREMENT_LIKE';
export const DECREMENT_LIKE = 'DECREMENT_LIKE';

export function incrementLike(id) {
  return { type: INCREMENT_LIKE, id };
}

export function decrementLike(id) {
  return { type: DECREMENT_LIKE, id };
}
