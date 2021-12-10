import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** Когда мы указываем в пути только папку, без файла, 
 * wabpack ищет файлик index.js с которого и подтягивает
 * нужные компоненты 
 */
import Spinner from '../spinner/Spinner';
import AppHeader from "../appHeader/AppHeader";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage.js'));
const ComicsPage = lazy(() => import('../pages/ComicsPage.js'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage.js'));

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path="/">
                                <MainPage />
                            </Route>
                            <Route exact path="/comics">
                                <ComicsPage />
                            </Route>
                            <Route exact path="/comics/:comicId">
                                <SingleComicPage />
                            </Route>
                            <Route path="*">
                                <Page404 />
                            </Route>
                        </Switch>
                    </Suspense>
                </main>
            </div>
        </Router>
    )

}

export default App;