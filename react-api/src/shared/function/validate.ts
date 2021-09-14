export const validatePerPageValue = (value: string) => {
  return +value % 5 !== 0 || value === '' || value === '0';
};

export const validatePageValue = (value: string, max: string) => {
  return +value > +max || value === '' || value === '0';
};
