export interface BlogPost {
  id: number; // Should be unique
  title: string;
  author: string;
  content: string;
  createdDate: Date;
}
