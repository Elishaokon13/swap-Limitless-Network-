import { WidgetEvents } from './WidgetEvents';
import { LiFiWidget, WidgetConfig } from '@lifi/widget';
import { useMemo } from 'react';

export const Widget = () => {
  const widgetConfig: WidgetConfig = useMemo(() => ({
    containerStyle: {
      variant: 'nft',
      marginTop: '35px',
      boxShadow: '0px 8px 32px rgba(0, 0, 0, 1.08)',
      borderRadius: '16px',
    },
    theme: {
      palette: {
        primary: { main: '#2196F3' },
        secondary: { main: '#2196F' },
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
      <WidgetEvents />
      <LiFiWidget
        config={widgetConfig}
        integrator="nextjs-example"
      />
    </>
  );
};
