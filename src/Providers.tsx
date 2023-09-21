import React from 'react'
import { ModalProvider, light, dark } from 'uikit'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { LanguageProvider } from 'contexts/Localization'
import { ToastsProvider } from 'contexts/ToastsContext'
import { Store } from '@reduxjs/toolkit'
import { MatchBreakpointsProvider } from 'uikit/contexts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const ThemeProviderWrapper = (props) => {
  return <ThemeProvider theme={dark} {...props} />
}

const queryClient = new QueryClient()

const Providers: React.FC<{ store: Store }> = ({ children, store }) => {
  return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MatchBreakpointsProvider>
            <ToastsProvider>
              <ThemeProviderWrapper>
                <LanguageProvider>
                  <ModalProvider>{children}</ModalProvider>
                </LanguageProvider>
              </ThemeProviderWrapper>
            </ToastsProvider>
          </MatchBreakpointsProvider>
        </Provider>
      </QueryClientProvider>
)}

export default Providers
