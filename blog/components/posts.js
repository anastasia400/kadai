import { Fragment } from 'react';
import Post from './post';

export default function Posts({ posts }) {
  // console.log(posts);
  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          {posts &&
            posts.map((post) => (
              <Fragment key={post.uid}>
                <Post {...post} />
                <hr className="my-4" />
              </Fragment>
            ))}
          <div className="d-flex justify-content-end mb-4">
            <a className="btn btn-primary text-uppercase">古い記事へ →</a>
          </div>
        </div>
      </div>
    </div>
  );
}