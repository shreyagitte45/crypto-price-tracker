export const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem('cryptoState', serialized);
  } catch (e) {
    console.error('Save failed', e);
  }
};

export const loadState = () => {
  try {
    const serialized = localStorage.getItem('cryptoState');
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (e) {
    console.error('Load failed', e);
    return undefined;
  }
};
