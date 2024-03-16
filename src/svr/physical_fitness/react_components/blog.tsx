import React, { Component } from "react";

interface IBlogstates{ 

}
interface IBlogProps{

}

class Blog extends Component <IBlogProps, IBlogstates> {
    constructor(props: IBlogProps){
        super(props)
        this.state = {

        }
    }
  render() {
    return (
      <div>
           <h1>Manoj</h1>
    
        </div>
      
    );
  }
}

export default Blog;

