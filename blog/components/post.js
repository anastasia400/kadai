import Link from 'next/link';

export default function Post({ uid, title, subTitle, createdAt }) {
  return (
    <div className="post-preview">
      <Link href={`/blog/${uid}`}>
        <h2 className="post-title">{title}</h2>
        <h3 className="post-subtitle">{subTitle}</h3>
      </Link>
      <p className="post-meta">
        Posted by
        <a>Start Bootstrap</a>
        {createdAt ? ` ${new Date(createdAt).toLocaleString()}` : ''}
      </p>
    </div>
  );
}