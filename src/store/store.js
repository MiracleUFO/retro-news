import { observable } from 'mobx';


 export const Store = () => {
  return {
    selected: observable({}),
    index: null,
    articles: observable([]),
    comments: observable([]),
   
    setSelected(index) {
      this.index = index;
      this.selected = this.articles[index];
    },
  
    addArticles(articles) {
      this.articles.replace(articles);
    },
  
    addComment(comment) {
      this.comments.push(comment)
    }
  }
}
