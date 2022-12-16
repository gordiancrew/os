
import Loader from '../controller/loader';
import { AppView } from '../view/appView';

class App {
    loader: Loader = new Loader();
    view: AppView = new AppView();

    start() {
        this.loader.getSources((data) => this.view.drawProducts(data));
    }
}

export default App;
