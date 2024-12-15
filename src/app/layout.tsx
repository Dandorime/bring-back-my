import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

import { Root } from '@/components/Root/Root';
import { I18nProvider } from '@/core/i18n/provider';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';
import ProviderLayout from './providerLayout';
import FlyonuiScript from '@/components/FlyonuiScript';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Your Application Title Goes Here',
  description: 'Your application description goes here',
};    
// import { Telegraf, Markup } from 'telegraf'
// import { message } from 'telegraf/filters'


export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  
// const token = '7673698115:AAFSWRVd_U4_mZkoiKHXxUhtX00zOBjL4LM'
// const webAppUrl = 'https://bring-back-my.vercel.app/'

// const bot = new Telegraf(token)

// bot.command('start', (ctx) => {
//   ctx.reply(
//     'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
//     Markup.keyboard([
//       Markup.button.webApp('Отправить сообщение', `${webAppUrl}`),
//     ])
//   )
// })

// bot.launch()

  return (
    <html lang={locale}>
      <Script src="https://telegram.org/js/telegram-web-app.js" onLoad={(e) => {e.Telegram.WebApp.expand()}}/>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </head>
    <body>
      <I18nProvider>
        <Root>
          <ProviderLayout>
            {children}
          </ProviderLayout>
        </Root>
      </I18nProvider>
    </body>
    <FlyonuiScript />
    </html>
  );
}
