import Header from '../components/header';

export default function Home() {
  const title = 'Next.js page';
  const message = 'React Next.js sample page.';

  return (
    <div>
      <Header title={title}></Header>

      <h1 className="bg-primary px-3 text-white display-4 text-end">React</h1>
      <div className="container">
        <h4 className="my-3 text-primary text-center">{title}</h4>
        <div className="alert alert-primary text-start">
          <p className="h5">{message}.</p>
        </div>
      </div>
    </div>
  );
}