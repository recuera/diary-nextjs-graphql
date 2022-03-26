export class Post {
  id: number;
  title: string;
  body: string;

  constructor(title: string = '', body: string = '', id: number = 0) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
}