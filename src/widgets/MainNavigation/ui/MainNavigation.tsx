import { ReactElement } from "react";
import { CategoriesTabs } from "src/shared";
import { NavigationCards } from "src/features";
import styles from "./MainNavigation.module.scss";

const MainNavigation = (): ReactElement => {
  return (
    <nav id="main-menu" className={styles.navigationRoot}>
      <CategoriesTabs className={styles.categoriesWrapper} />
      <NavigationCards />
    </nav>
  );
};

export default MainNavigation;
