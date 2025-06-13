"use client";

import { ReactElement } from "react";
import styles from "./Header.module.scss";
import LogoPc from "@@/public/logo/logoPc.webp";
import LogoMobile from "@@/public/logo/logoMobile.webp";
import ProfileIcon from "@@/public/icons/profile.webp";

import Image from "next/image";
import { Button, Typography, useWindowResolution } from "@/shared";
import NavigationModal from "../../../features/NavigationModal/ui/NavigationModal";

const Header = (): ReactElement => {
  const { isMobile } = useWindowResolution();

  return (
    <header className={styles.headerRoot}>
      <nav className={styles.navigationContainer}>
        {isMobile ? (
          <Image src={LogoMobile} alt="codereview-logo-mobile" className={styles.logoMobile} />
        ) : (
          <Image src={LogoPc} alt="codereview-logo-pc" className={styles.logoPc} />
        )}
        <NavigationModal />
        <Button outline className={styles.loginBtn}>
          <Image src={ProfileIcon} alt="profile-icon" className={styles.menuIcon} />
          {!isMobile && <Typography type="normal">Войти</Typography>}
        </Button>
      </nav>
    </header>
  );
};

export default Header;
