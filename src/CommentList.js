class CommentList {
  constructor(){
    this.comments = []
  }
  getComments(){
    return this.comments.map(function(comment){ return comment.render() }).join('')
  }
  
  render(){
    // let html = '<ul>'
    // html += this.comments.map(function(comment){ return comment.render() }).join('')
    // html += '</ul>'
    return `<ul>${this.getComments()}</ul>`
  }

  addComment(content){
    let new_comment = new Comment(content)
    this.comments.push(new_comment)
  }

}
