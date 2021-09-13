import React from 'react';
import { ESortValues } from '../../../shared/constants/sortValues';

export function SortPanel(props: ISortPanel): JSX.Element {
  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    props.setSort(value);
  };

  return (
    <select name="sort" value={props.sort} onChange={changeHandler}>
      <option>{ESortValues.datePostedAsc}</option>
      <option>{ESortValues.datePostedDesc}</option>
      <option>{ESortValues.dateTakenAsc}</option>
      <option>{ESortValues.dateTakenDesc}</option>
      <option>{ESortValues.interestingnessAsc}</option>
      <option>{ESortValues.interestingnessDesc}</option>
      <option>{ESortValues.relevance}</option>
    </select>
  );
}
