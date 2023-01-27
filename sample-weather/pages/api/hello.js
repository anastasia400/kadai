import { useState } from 'react';
import useSWR from 'swr';
import Layout from '../components/layout';

export default function Hello() {
  const [address, setAddress] = useState('/api/hello');
  // fetchメソッドをラップしたfetcher関数を用意する
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());
  const { data, error } = useSWR(address, fetcher);

  const onChange = (event) => {
    setAddress(`/api/hello?id=${event.target.value}`);
  };

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{JSON.stringify(data)}</h5>
          <input
            type="number"
            className="form-control"
            min="0"
            onChange={onChange}
          />
        </div>
      </Layout>
    </div>
  );
}