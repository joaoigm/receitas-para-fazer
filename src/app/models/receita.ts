import { Post } from './post';
export class Receita {
  nome: string;
  tipo: string;
  fit: boolean;
  vegan: boolean;
  testada: string;
  fonte: string;
  post: Post;

  constructor() {
    this.fit = false;
    this.vegan = false;
    this.post = new Post();
  }
}
