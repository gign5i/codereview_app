import { ReactElement } from "react";
import { newsLineItems } from "@/features/NewsLine/config/newsLineItems";
import { Icon, Typography } from "src/shared";
import styles from "./NewsLine.module.scss";
import DuckIcon from "@@/public/icons/duck.webp";

const NewsLine = (): ReactElement => (
  <div className={styles.container}>
    <div className={styles.newsWrapper}>
      {[...newsLineItems, ...newsLineItems, ...newsLineItems].map(item => (
        <div key={`${item.id}-${Math.random()}`} className={styles.newsItem}>
          <Icon icon={DuckIcon} />
          <Typography>{item.description}</Typography>
        </div>
      ))}
    </div>
  </div>
);

export default NewsLine;
