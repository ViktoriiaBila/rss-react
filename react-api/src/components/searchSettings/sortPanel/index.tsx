import React from 'react';
import { ESortValues } from '../../../shared/constants/sortValues';

export function SortPanel(props: ISortPanelProps): JSX.Element {
  return (
    <label className="searchSettingsForm__label" htmlFor="sort">
      <span className="searchSettingsForm__label__title">
        Choose an order in which to sort returned photos
      </span>
      <select
        className="searchSettingsForm__select"
        name="sort"
        value={props.sort}
        onChange={props.onChange}
      >
        <option>{ESortValues.datePostedAsc}</option>
        <option>{ESortValues.datePostedDesc}</option>
        <option>{ESortValues.dateTakenAsc}</option>
        <option>{ESortValues.dateTakenDesc}</option>
        <option>{ESortValues.interestingnessAsc}</option>
        <option>{ESortValues.interestingnessDesc}</option>
        <option>{ESortValues.relevance}</option>
      </select>
    </label>
  );
}
