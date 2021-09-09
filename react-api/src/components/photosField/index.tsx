import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { axiosInstance } from '../../services/api';
import { APIKEY } from '../../shared/constants/apiKey';
import { PhotoElement } from './photoElement';
import './photoField.scss';

const sizeSuffix = 'q';

export function PhotosField(props: IPhotosFieldProps): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [realname, setRealname] = useState<string>('');

  const getNameUser = async (userId: string) => {
    try {
      const responce: AxiosResponse<GET200_People> = await axiosInstance.get(
        `?method=flickr.people.getInfo&api_key=${APIKEY}&user_id=${userId}&format=json&nojsoncallback=1`,
      );
      setUsername(responce.data.person.username._content);
      setRealname(responce.data.person.realname._content);
    } catch (error) {
      console.log(error);
    }
  };

  //const names = props.photos.map((photo) => getNameUser(photo.owner));
  //console.log('names', names);

  return (
    <table className="photoField">
      <tbody>
        <tr className="photoField__photoElement main">
          <td className="photoField__photoElement__photo">image</td>
          <td className="photoField__photoElement__owner">owner</td>
          <td className="photoField__photoElement__title">title</td>
        </tr>
        {props.photos.map((photo, index: number) => {
          getNameUser(photo.owner);
          return (
            <PhotoElement
              key={index}
              url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${sizeSuffix}.jpg`}
              alt={`photo-${photo.id}`}
              owner={`username=${username} realname=${realname}`}
              title={photo.title}
            />
          );
        })}
      </tbody>
    </table>
  );
}
