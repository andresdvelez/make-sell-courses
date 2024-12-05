export interface Course {
  _createdAt: string | Date;
  views: number;
  author: Author;
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
}

export interface Author {
  _id: number;
  name: string;
}
