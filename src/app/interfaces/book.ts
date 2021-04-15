export interface Book {
  id: number;
  title: string;
  pages: number;
  isbn: string;
  price: number;
  summary: string;
  editorial: string;
  datePublication: Date;
  deleted: boolean;
  category: number;
}
