import { ReactElement } from "react";
import styles from "@/features/NavigationModal/ui/NavigationModal.module.scss";
import { categoriesList } from "@/shared/config/categories";
import { Button, Icon, Typography } from "src/shared";

const SpecializationsTabs = (): ReactElement => (
  <div className={styles.categoriesWrapper}>
    {categoriesList.map(category => (
      <Button key={category.id} outline className={styles.categoryItem}>
        <Icon icon={category.icon} />
        <Typography type="normal">{category.title}</Typography>
      </Button>
    ))}
  </div>
);

export default SpecializationsTabs;
