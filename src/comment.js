class Comment {
  constructor(content){
    this.content = content
  }

  render(){
    return `<li> ${this.content} </li>`
  }

}
