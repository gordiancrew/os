import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
      
        this.controller.getSources((data) => this.view.drawProducts(data));
    }
}

export default App;
