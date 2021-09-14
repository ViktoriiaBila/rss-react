import React from 'react';
import { SortPanel } from './sortPanel';
import '../../models/types';
import { PageSettings } from './pageSettings';
import { PerPageSettings } from './perPageSettings';
import './searchSettingsForm.scss';

export function SearchSettings(props: ISearchSettings): JSX.Element {
  return (
    <form className="searchSettingsForm">
      <SortPanel sort={props.sort} setSort={props.setSort} />
      <PageSettings
        page={props.page}
        setPage={props.setPage}
        pages={props.pages}
        errorPage={props.errorPage}
        setErrorPage={props.setErrorPage}
      />
      <PerPageSettings
        perPage={props.perPage}
        setPerPage={props.setPerPage}
        errorPerPage={props.errorPerPage}
        setErrorPerPage={props.setErrorPerPage}
      />
    </form>
  );
}
