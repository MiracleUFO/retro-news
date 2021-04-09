import { makeObservable, observable, action, computed } from 'mobx';

export default class Store {
  articles = [];
  comments = [];

  get getArticles() {
    return this.articles;
  }
  
  get getComments() {
    return this.comments;
  }

  addArticles(articles) {
    this.articles = articles;
  }

  addComment(comment) {
    this.comments.push(comment)
  }

  constructor() {
    makeObservable(this, {
      articles: observable,
      comments: observable,
      getArticles: computed,
      getComments: computed,
      addArticles: action,
      addComment: action
    })
  }
}
