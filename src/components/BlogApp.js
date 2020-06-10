import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks';
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import { config } from '../config'
import { client } from '../Utils/apollo';
import Router from '../Router';
import GithubCallback from '../components/GithubCallback';
import Toggle from "../components/Theme/Toggler";
import { GlobalStyles } from "../components/Theme/GlobalStyles";
import { lightTheme, darkTheme } from "../components/Theme/Theme";
import  { useDarkMode } from "../components/Theme/useDarkMode";

const BlogApp = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (urlParams.get('code')) {
    return <GithubCallback />
  }

  return (
    <>
      <Helmet>
          <title>{config.title}</title>
          <meta charSet="utf-8" />
          <meta name="description" content={config.subtitle} />
          <meta name="theme-color" content={config.header.backgroundColor} />
      </Helmet>
      <ApolloProvider client={client}>
        <ThemeProvider theme={themeMode} toggleTheme={themeToggler}>
          <GlobalStyles />
          <Router />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
};

export default BlogApp;