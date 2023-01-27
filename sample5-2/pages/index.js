import Header from '../components/header';
import Link from 'next/link';

export default function Home() {
  const title = 'Index';

  return (
    <div>
      <Header title={title} />
      <h1 className="bg-primary px-3 text-white display-4">React</h1>
      <div className="container">
        <h3 className="my-3 text-primary text-center">{title}</h3>
        <div className="card p3 text-center">
          <p>これは、ページ移動のサンプルです。</p>
          <Link href="/other">Go to Other page &gt;&gt;</Link>
        </div>
      </div>
    </div>
  );
}