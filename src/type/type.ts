export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  tag: string;
  eyeCatchImage?: {
    url: string;
    height: number;
    width: number;
  };
};

export type Profile = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
  name: string;
  avater: {
    url: string;
    height?: number;
    width?: number;
  };
  discription: string;
  facebookLink?: string;
  tiktokLink?: string;
};
