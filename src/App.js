import React, { Component } from 'react';
import MainMap from './components/MainMap/MainMap.jsx';
import Menu from './components/Menu/Menu.jsx';
import ModalCardInfo from './components/ModalCardInfo/ModalCardInfo.jsx';
import { Route, Switch } from 'react-router-dom';
import MapContainer from './components/GooglApi/GoogleApi.jsx';

class App extends Component {

   constructor() {
    super();

    this.state = {
      appName: 'Fish Search', 
      fishList: [
      {
          name: 'Окунь',
          nameEng: 'Okun',
          mediumWeight: 2.6,
          mediumLenght: 35,
          hunter: true,
          lakes: true,
          river: true,
          maxDepth: 50,
          minDepth: 0.3,
          rare: false,
          img: 'http://fishstocking.ru/img/okun_big.png',
          lat: 60.626777,
          lng: 28.414761
        },
        {
          name: 'Щука',
          nameEng: 'Shuka',
          mediumWeight: 3.5,
          mediumLenght: 105,
          hunter: true,
          lakes: true,
          river: true,
          maxDepth: 30,
          minDepth: 0.5,
          rare: false,
          img:'http://karasnedremi.com/wp-content/uploads/2013/03/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%8F-%D1%89%D1%83%D0%BA%D0%B0.png',
          lat: 60.664063,
          lng: 29.820113
        },
        {
          name: 'Язь',
          nameEng: 'Yas',
          mediumWeight: 2.5,
          mediumLenght: 43,
          hunter: true,
          lakes: true,
          river: true,
          maxDepth: 10,
          minDepth: 2,
          rare: false,
          img:'http://spinning-club.ru/wp-content/uploads/2019/02/yaz.png',
          lat: 60.794309,
          lng: 30.207673
        },
        {
          name: 'Карп',
          nameEng: 'Karp',
          mediumWeight: 10,
          mediumLenght: 36.5,
          hunter: true,
          lakes: true,
          river: true,
          maxDepth: 5,
          minDepth: 1,
          rare: false,
          img: 'http://uvarovskoe.ru/wp-content/uploads/2016/10/karp.png',
          lat: 61.017202,
          lng: 29.687397
        },
        {
          name: 'Судак',
          nameEng: 'Sudak',
          mediumWeight: 12.5,
          mediumLenght: 35,
          hunter: true,
          lakes: true,
          river: true,
          maxDepth: 5,
          minDepth: 2,
          rare: false, 
          img: 'http://forum.fisher61.ru/encryba/Sudak2.png',
          lat: 60.084313,
          lng: 30.001529
        }
      ]
    }
  }


  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => <Menu {...props} fishies={this.state.fishList}/>}/>
        <Route path="/fish/:name" render={(props) => <ModalCardInfo {...props} fishies={this.state.fishList}/>}/>
        <Route path="/MainMap" component={MainMap}/>
        <MapContainer/>
      </Switch>
    );
  }
}

export default App;
