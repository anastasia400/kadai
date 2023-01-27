import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Markdown from 'react-mark';
import { app } from '../../src/firebase';
import { getFirestore, getDoc, doc } from 'firebase/firestore/lite';

export default function BlowDetail() {
  const db = getFirestore(app);

  // 記事詳細用
  const [post, setPost] = useState(null);

  const router = useRouter();
  const { uid } = router.query;

  const headerBackgroundImage = {
    backgroundImage: "url('/img/post-bg.jpg')",
  };

  // クエリパラメーターが存在する時にFirestoreから記事を取得する
  useEffect(() => {
    if (uid === undefined) {
      return;
    }
    getDoc(doc(db, 'mydata', uid)).then((result) => {
      // console.log(result.data());
      setPost(result.data());
    });
  }, [router.query]);

  return (
    <Layout title="記事詳細" description="">
      <header className="masthead" style={headerBackgroundImage}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="post-heading">
                <h1>{post ? post.title : ''}</h1>
                <h2 className="subheading">{post ? post.subTitle : ''}</h2>
                <span className="meta">
                  Posted by
                  <a>Start Bootstrap</a>
                  {post ? ` ${new Date(post.createdAt).toLocaleString()}` : ''}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              {post && <Markdown text="#hello" />}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}