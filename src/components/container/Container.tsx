import React, { FC } from "react";
import cn from "classnames";

import { ContainerProps } from "./Container.type";

import styles from "./Container.module.scss";

const Container: FC<ContainerProps> = ({ children, className = "" }) => {
	return <div className={cn(styles.container, className)}>{children}</div>;
};

export default Container;
