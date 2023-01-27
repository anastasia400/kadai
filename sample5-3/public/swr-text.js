import Layout from '../components/layout';
import useSWR from 'swr';

export default function SwrJson() {
  // fetchメソッドをラップしたfetcher関数を用意する
  const fetcher = (...args) => fetch(...args).then((res) => res.text());
  const { data } = useSWR('/data.txt', fetcher);

  return (
    <div>
      <Layout header="Next.js" title="SWR page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{data}</h5>
        </div>
      </Layout>
    </div>
  );
}