import { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps
  extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...rest }: AvatarProps) {
  return (
    <>
      <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...rest} />
    </>
  );
}
