"use client";

import { Button, Card, CategoriesTabs, Icon, SpecializationsTabs, Typography } from "src/shared";
import styles from "./NavigationModal.module.scss";
import MenuIcon from "@@/public/icons/menu.webp";
import ArrowDownIcon from "@@/public/icons/arrow-down.webp";
import { useState } from "react";

const NavigationModal = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  return (
    <>
      <Button
        outline
        className={styles.specialisationBtn}
        onClick={() => setIsNavigationOpen(prev => !prev)}
      >
        <Icon icon={MenuIcon} />
        <Typography type="normal">Специализация</Typography>
        <Icon icon={ArrowDownIcon} />
      </Button>
      {isNavigationOpen && (
        // TODO: Заменить на Card на nav
        <Card className={styles.cardStyle}>
          <CategoriesTabs className={styles.categoriesCustom} />
          <SpecializationsTabs />
        </Card>
      )}
    </>
  );
};

export default NavigationModal;
