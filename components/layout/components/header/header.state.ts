import { useCallback, useEffect, useState } from 'react';

import { closeModal, openModal } from '@utils/modal';

export const useHeaderState = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);
  const checkScroll = useCallback(() => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;

    setIsSticky(!!top);
  }, []);

  const openSearchModal = useCallback(() => {
    openModal(() => {
      setIsOpenSearchModal(true);
    });
  }, []);
  const closeSearchModal = useCallback(() => {
    closeModal(() => {
      setIsOpenSearchModal(false);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [checkScroll]);

  return {
    isSticky,
    isOpenSearchModal,
    openSearchModal,
    closeSearchModal,
  };
};
