import { WidgetEvents } from './WidgetEvents';
import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import { useMemo } from 'react';
import Navbar from './Navbar';

export const Widget = () => {
  const widgetConfig: WidgetConfig = useMemo(() => ({
    containerStyle: {
      marginTop: '35px',
      boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
      borderRadius: '16px',
    },
    theme: {
      palette: {
        primary: { main: '#2196F3' },
        secondary: { main: '#F5B5F' },
      },
      shape: {
        borderRadius: 20,
        borderRadiusSecondary: 20,
      },
      typography: {
        fontFamily: 'Segoe UI',
      },
    },
    appearance: 'dark',
    hiddenUI: ['appearance'],
  }), []);

  

  return (
    <>
      <Navbar />
      <WidgetEvents />
      <LiFiWidget
        config={widgetConfig}
        integrator="nextjs-example"
      />
    </>
  );
};
