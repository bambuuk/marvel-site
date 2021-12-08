import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** Когда мы указываем в пути только папку, без файла, 
 * wabpack ищет файлик index.js с которого и подтягивает
 * нужные компоненты 
 */
import {MainPage, ComicsPage, Page404, SingleComicPage} from '../pages';
import AppHeader from "../appHeader/AppHeader";

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                        <Route exact path="/comics/:comicId">
                            <SingleComicPage/>
                        </Route>
                        <Route path="*">
                            <Page404/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )

}

export default App;