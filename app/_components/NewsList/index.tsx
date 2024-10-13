import Image from "next/image";
import Date from "../Date";
import Category from "../Category";
import type { News } from "@/app/_libs/microcms";
import styles from "./index.module.css";

// type News = {
//   id: string;
//   title: string;
//   category: {
//     name: string;
//   };
//   publishedAt: string;
//   createdAt: string;
// };

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <div className={styles.link}>
            <Image
              className={styles.image}
              src="/no-image.png"
              alt="No Image"
              width={1200}
              height={630}
            />
          </div>
          <dl className={styles.content}>
            <dt className={styles.title}>{article.title}</dt>
            <dd className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt} />
            </dd>
          </dl>
        </li>
      ))}
    </ul>
  );
}
