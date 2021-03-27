import React,{Component} from 'react'
import Nav from "./component/Nav";
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import PersonInfoGettingDataFromServer from './component/get/PersonInfoGettingDataFromServer'
import SinglePersonInfoGettingFormServerAxios from './component/get/SinglePersonInfoGettingFormServerAxios'
import PersonInfoData from "./component/get/PersonInfoData";
class App extends Component{

//SinglePersonInfoGettingFormServerAxios
  render() {
    return (
        <div>
           <Router>
                <Nav/>
                <Switch>
                    <Route path="/SinglePersonInfoGettingFormServerAxios"  component={SinglePersonInfoGettingFormServerAxios}/>
                    <Route path="/PersonInfoGettingDataFromServer" component={PersonInfoGettingDataFromServer}/>


                </Switch>
            </Router>
        </div>
    );
  }
}
export default App;