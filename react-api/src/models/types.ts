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

// props types

interface ISearchFormProps {
  setPhotos: React.Dispatch<React.SetStateAction<Array<Photo> | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPages: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  page: string;
  perPage: string;
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

interface ISearchSettings {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  pages: string;
  perPage: string;
  setPerPage: React.Dispatch<React.SetStateAction<string>>;
  errorPage: boolean;
  setErrorPage: React.Dispatch<React.SetStateAction<boolean>>;
  errorPerPage: boolean;
  setErrorPerPage: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ISortPanel {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

interface IPageSettings {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  pages: string;
  errorPage: boolean;
  setErrorPage: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IPerPageSettings {
  perPage: string;
  setPerPage: React.Dispatch<React.SetStateAction<string>>;
  errorPerPage: boolean;
  setErrorPerPage: React.Dispatch<React.SetStateAction<boolean>>;
}
