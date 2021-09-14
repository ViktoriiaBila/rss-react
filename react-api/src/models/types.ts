interface GET200_Photos {
  photos: Photos;
}

interface Photos {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: Array<Photo>;
}

interface Photo {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
  ownername: string;
}

interface SearchSettings {
  sort: string;
  page: string;
  pages: string;
  perPage: string;
  errorPage: boolean;
  errorPerPage: boolean;
}

// props types

interface ISearchFormProps {
  setPhotos: React.Dispatch<React.SetStateAction<Array<Photo> | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchSettings: SearchSettings;
  setSearchSettings: React.Dispatch<React.SetStateAction<SearchSettings>>;
}

interface IPhotosFieldProps {
  photos: Array<Photo>;
}

interface IPhotoElementProps {
  url: string;
  alt: string;
  owner: string;
  title: string;
}

interface ISearchSettingsProps {
  searchSettings: SearchSettings;
  setSearchSettings: React.Dispatch<React.SetStateAction<SearchSettings>>;
}

interface ISortPanelProps {
  sort: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface IPageSettingsProps {
  page: string;
  pages: string;
  errorPage: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IPerPageSettingsProps {
  perPage: string;
  errorPerPage: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
