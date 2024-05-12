'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const ToastCustomContainer = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  return <ToastContainer theme={resolvedTheme} autoClose={3000} hideProgressBar closeOnClick />;
};
