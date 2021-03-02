import React from 'react';
import logo from './static/images/rndrLogo.png';
import './static/styles/App.css';
import footer from './static/images/footer.png';
import { iframeResizer } from 'iframe-resizer'
import './static/styles/App.css';
import HeaderBar  from "./components/header/header";
//const embeddedUrl = `${ASSET_URL}?embed=${CHOSEN_THEME}`
const embeddedRNDRUrl = 'https://opensea.io/assets?embed=night'

class App extends React.Component {

  componentDidMount() {
    iframeResizer({ log: false }, '#opensea-iframe')
  }

  render() {
    return (
      <div >
          <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />
          <p>
              RNDR NFT Marketplace
          </p>
          <i className="material-icons right">menu</i>*/}
          <HeaderBar />
        </header>
        <main className="App-main" style={{minHeight: '200vh'}}>
            <iframe id="opensea-iframe" title="Embedded OpenSea Marketplace" src={embeddedRNDRUrl} width='100%' height='100%' frameBorder={0} allowFullScreen style={{minHeight: '200vh'}} />
        </main>
        <footer className="App-footer">
          <img style={{width: '100px'}} src={logo} className="footer" alt="footer" />
        </footer>
      </div>
    );
  }
}

export default App;
