import React from 'react';
import { SortPanel } from './sortPanel';
import '../../models/types';
import { PageSettings } from './pageSettings';
import { PerPageSettings } from './perPageSettings';

export function SearchSettings(props: ISearchSettings): JSX.Element {
  return (
    <form className="searchSettingsForm">
      <SortPanel sort={props.sort} setSort={props.setSort} />
      <PageSettings
        page={props.page}
        setPage={props.setPage}
        pages={props.pages}
      />
      <PerPageSettings perPage={props.perPage} setPerPage={props.setPerPage} />
    </form>
  );
}
