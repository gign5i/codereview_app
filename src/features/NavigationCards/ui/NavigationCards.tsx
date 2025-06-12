import { ReactElement } from "react";
import { categoriesList } from "@/shared/config/categories";
import { Card, Icon, Typography } from "@/shared";
import styles from "./NavigationCards.module.scss";

const NavigationCards = (): ReactElement => (
  <div className={styles.root}>
    {categoriesList.map(category => (
      <Card
        className={styles.cardItem}
        key={category.id}
        header={<Icon icon={category.icon} />}
        footer={<Typography>{category.title}</Typography>}
      >
        <Typography>{category.description}</Typography>
      </Card>
    ))}
  </div>
);

export default NavigationCards;
