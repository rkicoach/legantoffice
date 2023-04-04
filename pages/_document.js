import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { cxs } from 'axs';
import { globalStyleObject, globalStyleString } from '../styles';

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const style = cxs.getCss();
    cxs.reset();

    return { ...page, style };
  }

  render() {
    return (
      <html style={globalStyleObject.html} lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: globalStyleString }} />
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body style={globalStyleObject.body}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
