import React from 'react';
import { SortPanel } from './sortPanel';
import '../../models/types';
import { PageSettings } from './pageSettings';
import { PerPageSettings } from './perPageSettings';
import './searchSettingsForm.scss';
import {
  validatePageValue,
  validatePerPageValue,
} from '../../shared/function/validate';

export function SearchSettings(props: ISearchSettingsProps): JSX.Element {
  const changeHandler_select = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const value = event.target.value;
    props.setSearchSettings((state) => ({ ...state, sort: value }));
  };

  const changeHandler_inputPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    props.setSearchSettings((state) => ({
      ...state,
      page: value,
      errorPage: validatePageValue(value, props.searchSettings.pages),
    }));
  };

  const changeHandler_inputPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    props.setSearchSettings((state) => ({
      ...state,
      perPage: value,
      errorPerPage: validatePerPageValue(value),
    }));
  };

  return (
    <form className="searchSettingsForm">
      <SortPanel
        sort={props.searchSettings.sort}
        onChange={changeHandler_select}
      />
      <PageSettings
        page={props.searchSettings.page}
        pages={props.searchSettings.pages}
        errorPage={props.searchSettings.errorPage}
        onChange={changeHandler_inputPage}
      />
      <PerPageSettings
        perPage={props.searchSettings.perPage}
        errorPerPage={props.searchSettings.errorPerPage}
        onChange={changeHandler_inputPerPage}
      />
    </form>
  );
}
