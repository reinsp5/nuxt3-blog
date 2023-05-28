import type { Category } from './category';

export interface Article {
  _id: string;
  _sys: ArticleSys;
  title: string;
  slug: string;
  body: string;
  description: string;
  coverImage: ArticleCoverImage | null;
  categories: Category[] | null;
}

interface ArticleSys {
  createdAt: string;
  updatedAt: string;
  raw: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    firstPublishedAt: string;
  };
}

interface ArticleCoverImage {
  _id: string;
  src: string;
  fileType: string;
  fileSize: number;
  fileName: string;
  width: number;
  height: number;
}