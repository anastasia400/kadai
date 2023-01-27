import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { app } from '../../src/firebase';
import { getFirestore, setDoc, doc } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

export default function New() {
  const db = getFirestore(app);
  const auth = getAuth(app);

  const [message, setMessage] = useState('add address');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [tel, setTel] = useState('');
  const [memo, setMemo] = useState('');
  const router = useRouter();

  // ログインされていなければアドレス一覧ページへリダイレクトする
  useEffect(() => {
    // ログインされていないか確認する
    if (auth.currentUser == null) {
      // アドレス一覧ページへリダイレクトする
      router.push('/address');
    }
  }, []);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeMail = (event) => {
    setMail(event.target.value);
  };

  const onChangeTel = (event) => {
    setTel(event.target.value);
  };

  const onChangeMemo = (event) => {
    setMemo(event.target.value);
  };

  // アドレスを登録するclickイベント
  const doAction = (event) => {
    const newAddress = {
      name: name,
      mail: mail,
      tel: tel,
      memo: memo,
      flag: false, // メッセージ送信の有無
    };

    // Firestoreにアドレスを追加する
    setDoc(
      doc(db, 'address', auth.currentUser.email, 'address', mail),
      newAddress
    ).then((_) => {
      // アドレス一覧ページへリダイレクトする
      router.push('/address');
    });
  };

  // アドレス一覧ページへ戻る
  const goBack = (event) => {
    // アドレス一覧ページへリダイレクトする
    router.push('/address');
  };

  return (
    <div>
      <Layout header="Next.js" title="アドレスの追加">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{message}</h5>
          <div className="text-start">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                onChange={onChangeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mail">Mail:</label>
              <input
                type="text"
                name="mail"
                id="mail"
                className="form-control"
                onChange={onChangeMail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tel">Tel:</label>
              <input
                type="text"
                name="tel"
                id="tel"
                className="form-control"
                onChange={onChangeTel}
              />
            </div>
            <div className="form-group">
              <label htmlFor="memo">Memo:</label>
              <input
                type="text"
                name="memo"
                id="memo"
                className="form-control"
                onChange={onChangeMemo}
              />
            </div>
          </div>
          <button className="btn btn-primary" onClick={doAction}>
            登録
          </button>
          <button className="btn" onClick={goBack}>
            戻る
          </button>
        </div>
      </Layout>
    </div>
  );
}