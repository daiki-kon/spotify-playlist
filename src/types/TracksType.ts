export type TracksType = {
  total: number;
  items: {
    track: {
      id: string;
      name: string;
      artists: {
        name: string;
        id: string;
      }[];
      album: {
        id: string;
        name: string;
        images: {
          url: string;
        }[];
      };
    };
  }[];
  next: string;
};
