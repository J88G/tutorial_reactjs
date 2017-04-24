import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component  {
  render (){
    return(
      <div>

      <NavigationBar />

      <div className="container">

        <div className="jumbotron">
          <FlashMessagesList />
          {this.props.children}
          </div>
        </div>

<Footer />
      </div>


    );
  }
}

export default App;
