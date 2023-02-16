import { NextComponentType, NextPageContext } from 'next';

/** types, libs */
import { Event } from '@/types';

/** styles */
import styles from '@/styles/top/wrapper.module.scss';

type Props = {
  topEvents: Event[];
};

export const TopTemplate: NextComponentType<NextPageContext, null, Props> = ({ topEvents }) => {
  return (
    <div className={styles.wrapper}>
      <div></div>
      <div>{topEvents[0].title}</div>
    </div>
  );
};
