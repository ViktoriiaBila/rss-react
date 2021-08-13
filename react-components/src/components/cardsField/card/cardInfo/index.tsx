import React from 'react';
import './cardInfo.scss';

interface ICardInfoProps {
  title?: string;
  author?: string;
  tags?: Array<string>;
}

function CardInfoTitle({ title }: ICardInfoProps): JSX.Element {
  return <div className="cardsField_card_info_title">{title}</div>;
}

function CardInfoAuthor({ author }: ICardInfoProps): JSX.Element {
  return (
    <div className="cardsField_card_info_author">
      by <span className="authorName">{author}</span>
    </div>
  );
}

function CardInfoTags({ tags }: ICardInfoProps): JSX.Element {
  const tagsSapn = tags?.map((tag) => {
    return <span className="cardsField_card_info_tags_item">{tag}</span>;
  });
  return <div className="cardsField_card_info_tags">{tagsSapn}</div>;
}

export function CardInfo(props: ICardInfoProps): JSX.Element {
  return (
    <div className="cardsField_card_info">
      <CardInfoTitle title={props.title} />
      <CardInfoAuthor author={props.author} />
      <div className="cardsField_card_info_hr"></div>
      <CardInfoTags tags={props.tags} />
    </div>
  );
}
