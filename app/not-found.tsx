import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <dl>
                <dt className={styles.title}>ページが見つかりませんでした</dt>
                <dd className={styles.text} >
                    あなたがアクセスしようとしたページは削除されたか、
                    <br />
                    URLが変更された可能性があります。
                </dd>
            </dl>
        </div>
    )
}   