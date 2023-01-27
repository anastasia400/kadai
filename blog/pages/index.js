import Layout from '../components/layout';
import Posts from '../components/posts';
import { app } from '../src/firebase';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';

export default function Home() {
  const db = getFirestore(app);

  // 記事一覧用
  const [data, setData] = useState([]);

  const headerBackgroundImage = {
    backgroundImage: "url('/img/home-bg.jpg')",
  };

  useEffect(() => {
    // 最新の記事を日付の降順で２件取得する
    getDocs(
      query(collection(db, 'mydata'), orderBy('createdAt', 'desc'), limit(2))
    ).then((snapshot) => {
      setData(
        snapshot.docs.map((document) => ({
          uid: document.id,
          ...document.data(),
        }))
      );
    });
  }, []);

  return (
    <Layout>
      <header className="masthead" style={headerBackgroundImage}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Tech Blog</h1>
                <span className="subheading">
                  A Blog Theme by Start Bootstrap
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Posts posts={data} />
    </Layout>
  );
}