"use client";
import { ReactElement } from "react";
import styles from "@/widgets/Footer/ui/Footer.module.scss";
import { footerLinksList } from "@/widgets/Footer/config/footerLinksList";
import { Card, Typography } from "src/shared";
import { useWindowResolution } from "@/shared";

const FooterNavigation = (): ReactElement => {
  const { isMobile } = useWindowResolution();
  return (
    <div className={styles.mainFooterContent}>
      <div className={styles.linksWrapper}>
        {footerLinksList.map(link => (
          <Typography
            className={styles.linkItem}
            type={isMobile ? "small" : "normal"}
            key={link.id}
          >
            {link.title}
          </Typography> // Заменить Типографию на линку
        ))}
      </div>
      <Card
        className={styles.cardStyle}
        header={
          <Typography color="white" type="small">
            На какую зарплату я могу претендовать?
          </Typography>
        }
        headerClassName={styles.mobileCardHeader}
        footer={
          <Typography color="gray" type="small">
            Пройти тест
          </Typography>
        }
      />
    </div>
  );
};

export default FooterNavigation;
