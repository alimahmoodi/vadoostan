import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import {
  ColorSchemeScript,
  createTheme,
  MantineProvider,
  DirectionProvider,
  mantineHtmlProps,
} from '@mantine/core';
import classes from './style.module.scss';

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

const vazir = Vazirmatn({
  variable: '--font-vazir',
  subsets: ['arabic'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const theme = createTheme({
  fontFamily: vazir.style.fontFamily,

  /** Your theme override here */
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DirectionProvider initialDirection='rtl'>
      <html lang='fa' dir='rtl' {...mantineHtmlProps}>
        <head>
          <ColorSchemeScript />
        </head>
        <body className={classes['body']}>
          <MantineProvider theme={theme}>
            <div className={classes['wrapper']}>
              <div className={classes['app']}>{children}</div>
            </div>
          </MantineProvider>
        </body>
      </html>
    </DirectionProvider>
  );
}

// import classes from './style.module.scss';
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <div className={classes['layout-wrapper']}>
//       <div
//         style={{
//           width: '440px',
//           height: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }
