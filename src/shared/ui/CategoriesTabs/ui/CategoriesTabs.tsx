import styles from "./CategoriesTabs.module.scss";
import { specializations } from "@/shared/config/specializations";
import { Button, Typography } from "src/shared";
import { ReactElement } from "react";
import clsx from "clsx";

const CategoriesTabs = ({ className }: { className?: string }): ReactElement => (
  <div className={clsx(styles.specialisationsWrapper, className)}>
    {specializations.map(specialization => (
      <Button key={specialization.id} className={styles.specialisationItem}>
        <Typography type="normal">{specialization.label}</Typography>
      </Button>
    ))}
  </div>
);

export default CategoriesTabs;
