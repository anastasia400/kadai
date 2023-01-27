import Layout from '../../components/layout';

export default function BlowNew() {
  return (
    <Layout title="記事作成" description="TechBlogの記事を作成します。">
      <header className="masthead">
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="page-heading">
                <h1>記事作成</h1>
                <span className="subheading">
                  タイトル、サブタイトル、本文を記入してください。
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="my-5">
                <form id="contactForm">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="title"
                      type="text"
                      placeholder="Enter your title..."
                    />
                    <label htmlFor="title">タイトル</label>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="subtitle"
                      type="text"
                      placeholder="Enter your subtitle..."
                    />
                    <label htmlFor="subtitle">サブタイトル</label>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="body"
                      placeholder="Enter your body here..."
                      style={{ height: '12rem' }}
                    ></textarea>
                    <label htmlFor="body">本文</label>
                  </div>
                  <br />
                  <button
                    className="btn btn-primary text-uppercase disabled"
                    id="submitButton"
                    type="submit"
                  >
                    送信
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}