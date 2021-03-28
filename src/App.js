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
import PersonInfoWithAxiosConsole from './component/get/PersonInfoWithAxiosConsole'
import PersonInfoConsole from './component/get/PersonInfoConsole'
import PersonInfoDataDelete from './component/delete/DeletePersonInfo'
import PostPersonInformation from './component/post/PostPersonInformation'
class App extends Component{

//SinglePersonInfoGettingFormServerAxios
  render() {
    return (
        <div>
           <Router>
                <Nav/>
                <Switch>
                    <Route path="/PersonInfoConsole" component={PersonInfoConsole}/>
                    <Route path="/PersonInfoWithAxiosConsole" component={PersonInfoWithAxiosConsole}/>
                    <Route  path="/maininfo/:id" component={ PersonInfoDetail}/>
                    <Route path="/maininfo" component={PersonInfoGettingFromServerAxios}/>
                    <Route path="/PersonInfoWithClassAndFetch " component={PersonInfoWithClassAndFetch}/>
                    <Route path="/SinglePersonInfoGettingFormServerAxios"  component={SinglePersonInfoGettingFormServerAxios}/>
                    <Route path="/PersonInfoGettingDataFromServer" component={PersonInfoGettingDataFromServer}/>
                    <Route path="/PersonInfoWithClassAndFetchOtherExample" component={PersonInfoWithClassAndFetchOtherExample}/>
                    <Route path="/SinglePersonInfoGettingFormServerAxiosInputStyle" component={SinglePersonInfoGettingFormServerAxiosInputStyle}/>
                    <Route path="/PersonInfoDataDelete" component={PersonInfoDataDelete}/>
                    <Route path="/PostPersonInformation" component={PostPersonInformation}/>
                </Switch>
            </Router>
        </div>
    );
  }
}
export default App;