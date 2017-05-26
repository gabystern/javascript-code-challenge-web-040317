class CommentList {
  constructor(){
    this.comments = []
  }

  render(){
    let html = '<ul>'
    html += this.comments.map(function(comment){ return comment.render() }).join('')
    html += '</ul>'
    return html
  }

  addComment(content){
    let new_comment = new Comment(content)
    this.comments.push(new_comment)
  }

}
