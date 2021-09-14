import { ESortValues } from './sortValues';

export const initialSearchSettings: SearchSettings = {
  sort: ESortValues.datePostedDesc,
  page: '1',
  pages: '1',
  perPage: '5',
  errorPage: false,
  errorPerPage: false,
};
