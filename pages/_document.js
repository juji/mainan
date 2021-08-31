import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {

    const sheet = new ServerStyleSheet()
    const muiSheets = new ServerStyleSheets()

    const page = renderPage(App => props => sheet.collectStyles(muiSheets.collect(<App {...props} />)));
    const styleTags = sheet.getStyleElement();
    const muiStyleTags = muiSheets.getStyleElement();

    return {
      ...page,
      styles: (
        <>
          {page.styles}
          {muiStyleTags}
          {styleTags}
        </>
      )
    }
  }
}
