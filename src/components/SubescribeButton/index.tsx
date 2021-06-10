import React from 'react';

import styles from './styles.module.scss';
interface SubscribeButtonProps {
    priceId: string;
  }

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
    console.log(priceId);
    return (
        <button
            type="button"
            className={styles.subscribeButton}
            // onClick={}
    >
      Subscribe now
    </button>
    )
}
