import './globals.css';

export const metadata = {
  title: 'openGtech | From Idea to Impact',
  description: 'We help founders navigate the thinking stage and build scalable businesses with AI, Automation, and Digital Engineering.',
};

import SmoothScrolling from '../components/SmoothScrolling';
import PageLoader from '../components/PageLoader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
