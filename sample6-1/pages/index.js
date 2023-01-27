import { useState, useEffect } from 'react';
import '../../components/fire';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Layout from '../../components/layout';
import Link from 'next/link';

// firestoreインスタンスを取得する
const db = getFirestore();

export default function Home() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('wait...');

  useEffect(() => {
    // (非同期処理)mydataコレクションの中にあるデータを取得する
    // 1. コレクションのパスを指定する
    // 2. mydataコレクションの全ドキュメントを取得する
    // 3. 全ドキュメントを１つずつ取り出してJSXのリストを作成する
    getDocs(collection(db, 'mydata')).then((snapshot) => {
      const newData = [];
      snapshot.forEach((document) => {
        const doc = document.data();
        console.log(doc);
        newData.push(
          <tr key={document.id}>
            <td>
              <Link href={`/fire/del?id=${document.id}`}>{document.id}</Link>
              {/* <a href={`/fire/del?id=${document.id}`}>{document.id}</a> */}
            </td>
            <td>{doc.name}</td>
            <td>{doc.mail}</td>
            <td>{doc.age}</td>
          </tr>
        );
      });
      setData(newData);
      setMessage('Firebase data.');
    });
  }, []);

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{message}</h5>
          <table className="table bg-white text-start">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mail</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
}