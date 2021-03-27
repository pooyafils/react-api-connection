import React,{Component} from 'react'
import Nav from "./component/Nav";
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import PersonInfoGettingDataFromServer from './component/get/PersonInfoGettingDataFromServer'
import SinglePersonInfoGettingFormServerAxios from './component/get/SinglePersonInfoGettingFormServerAxios'
import PersonInfoWithClassAndFetch from './component/get/PersonInfoWithClassAndFetch'
import PersonInfoWithClassAndFetchOtherExample from './component/get/PersonInfoWithClassAndFetchOtherExample'
import SinglePersonInfoGettingFormServerAxiosInputStyle from './component/get/SinglePersonInfoGettingFormServerAxiosInputStyle'
import PersonInfoGettingFromServerAxios from './component/get/PersonInfoGettingFromServerAxios'
import PersonInfoDetail from './component/get/PersonInfoDetail'
class App extends Component{

//SinglePersonInfoGettingFormServerAxios
  render() {
    return (
        <div>
           <Router>
                <Nav/>
                <Switch>
                    <Route  path="/maininfo/:id" component={ PersonInfoDetail}/>
                    <Route path="/maininfo" component={PersonInfoGettingFromServerAxios}/>
                    <Route path="/PersonInfoWithClassAndFetch " component={PersonInfoWithClassAndFetch}/>
                    <Route path="/SinglePersonInfoGettingFormServerAxios"  component={SinglePersonInfoGettingFormServerAxios}/>
                    <Route path="/PersonInfoGettingDataFromServer" component={PersonInfoGettingDataFromServer}/>
                    <Route path="/PersonInfoWithClassAndFetchOtherExample" component={PersonInfoWithClassAndFetchOtherExample}/>
                    <Route path="/SinglePersonInfoGettingFormServerAxiosInputStyle" component={SinglePersonInfoGettingFormServerAxiosInputStyle}/>
                </Switch>
            </Router>
        </div>
    );
  }
}
export default App;