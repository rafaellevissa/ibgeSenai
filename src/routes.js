import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/index';
import Response from './pages/response';

const Routes = createAppContainer(
    createStackNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
        Response: {
            screen: Response,
            navigationOptions: {
                header: null
            }
        }
    })
);

export default Routes;
