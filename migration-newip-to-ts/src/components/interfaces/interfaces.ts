export interface ISource {
  id: string | null;
  name: string
}

export interface INewsStructure {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ISourcesStructure {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;   
}

export interface INewsData {
  status: string;
  totalResults: number;
  articles: INewsStructure[];
} 

export interface ISourcesData {
  status: string;
  sources: ISourcesStructure[];
}