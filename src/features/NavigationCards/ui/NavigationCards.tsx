import { ReactElement } from "react";
import { categoriesList } from "@/shared/config/categories";
import { Card, Icon, Typography } from "@/shared";
import styles from "./NavigationCards.module.scss";

const NavigationCards = (): ReactElement => (
  <div className={styles.root}>
    {categoriesList.map(category => (
      <Card
        className={styles.cardItem}
        headerClassName={styles.cardHeader}
        contentClassName={styles.description}
        key={category.id}
        header={<Icon icon={category.icon} className={styles.iconStyle} />}
        footer={<Typography type="normal">{category.title}</Typography>}
      >
        <Typography type="small">{category.description}</Typography>
      </Card>
    ))}
  </div>
);

export default NavigationCards;
