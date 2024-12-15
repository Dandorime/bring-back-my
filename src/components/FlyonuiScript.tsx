'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { IStaticMethods } from 'flyonui/flyonui';
import Script from 'next/script';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function FlyonuiScript() {
  const path = usePathname();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import('flyonui/flyonui');
      window.HSStaticMethods.autoInit();
    };
    loadFlyonui();
  }, [path]);

  return <Script src="https://telegram.org/js/telegram-web-app.js" onLoad={(e) => {e.Telegram.WebApp.expand()}}/>;
}