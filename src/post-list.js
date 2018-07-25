import React from 'react';
import {Link} from 'react-router-dom';

class Post extends React.Component {
    
    render() {
    return (
            <div className="row">
                <h3>{props.title.rendered}</h3>
                <div dangerouslySetInnerHTML={{__html: props.content.rendered}} />
            </div>
        );
    }
}
  class PostList extends React.Component {
      constructor() {
          super();
          this.state = {
              posts: []
          };
      }

      componentDidMount() {
          let api = new Api();

          api.posts().then(data => {
              this.setState({
                  posts: data
              });
          });
      }

      render() {
        let posts = this.state.posts.map((post, index) => 
        <h3 key={index}>
            <Link to={'/post/' + post.id}>{post.title.rendered}</Link>
        </h3>
        );
        return (
            <div>{posts}</div>
        );
      }
    }

    export {Post, PostList};
