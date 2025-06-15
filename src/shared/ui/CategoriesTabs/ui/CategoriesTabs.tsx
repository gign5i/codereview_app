"use client";
import styles from "./CategoriesTabs.module.scss";
import { specializations } from "@/shared/config/specializations";
import { Button, Typography } from "src/shared";
import { ReactElement } from "react";
import clsx from "clsx";
import { useWindowResolution } from "@/shared";

const CategoriesTabs = ({ className }: { className?: string }): ReactElement => {
  const { isMobile } = useWindowResolution();
  return (
    <div className={clsx(styles.specialisationsWrapper, className)}>
      {specializations.map(specialization => (
        <Button primary key={specialization.id} className={styles.specialisationItem}>
          <Typography type={isMobile ? "small" : "normal"}>{specialization.label}</Typography>
        </Button>
      ))}
    </div>
  );
};

export default CategoriesTabs;
