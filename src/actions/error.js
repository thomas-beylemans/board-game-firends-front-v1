export const SAVE_ERROR = 'SAVE_ERROR';
export const saveError = (error) => ({
  type: SAVE_ERROR,
  error,
});

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const clearError = () => ({
  type: CLEAR_ERROR,
});
