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
}
