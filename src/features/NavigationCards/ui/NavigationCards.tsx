"use client";

import { ReactElement } from "react";
import { categoriesMain } from "@/shared/config/categories";
import { Card, Icon, Typography, useWindowResolution } from "src/shared";
import styles from "./NavigationCards.module.scss";
import PeopeIcon from "@@/public/icons/MockedPhoto.webp";
import clsx from "clsx";

const NavigationCards = (): ReactElement => {
  const { isMobile } = useWindowResolution();

  return (
    <>
      <div className={styles.root}>
        {categoriesMain?.map(category => (
          <Card
            className={clsx(styles.cardItem, {
              [styles[category.className as string]]: category.className,
            })}
            headerClassName={styles.cardHeader}
            contentClassName={styles.description}
            key={category.id}
            header={<Icon icon={category.icon} className={styles.iconStyle} />}
            footer={
              <Typography className={styles.titleStyle} type={isMobile ? "small" : "medium"}>
                {category.title}
              </Typography>
            }
          >
            {!isMobile ? <Typography type="small">{category.description}</Typography> : null}
          </Card>
        ))}
      </div>
      <div className={styles.additionalMenuCardsWrapper}>
        <Card
          className={styles.contactToUsCard}
          header={<Icon icon={PeopeIcon} className={styles.additionalIconStyle} />}
          headerClassName={styles.cardHeader}
          footer={
            <Typography type={isMobile ? "small" : "title"}>
              База резюме соискателей. Свяжитесь с понравившемся кандидатами напрямую
            </Typography>
          }
          footerClassName={styles.contactDescription}
        />
        <Card
          className={styles.postVacancy}
          headerClassName={styles.headerContainer}
          header={<Typography className={styles.badge}>Бесплатно</Typography>}
          footer={
            <Typography className={styles.postVacansyTitle} type={isMobile ? "small" : "title"}>
              Разместить вакансию
            </Typography>
          }
        />
      </div>
    </>
  );
};

export default NavigationCards;
