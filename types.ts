
export type Category = 'APK' | 'Juegos' | 'Programas';

export interface FileItem {
  id: string;
  name: string;
  category: Category;
  description: string;
  fullDescription: string;
  version: string;
  size: string;
  requirements: string;
  imageUrl: string;
  isFeatured?: boolean;
  date: string;
  popularity: number; // 1-100
}

export type SortOption = 'latest' | 'popular' | 'size' | 'name';
