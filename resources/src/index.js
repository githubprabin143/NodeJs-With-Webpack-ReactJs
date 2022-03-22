import React from 'react';
import Home from './pages/Home';
import './pages/Dashboard';
import ReactDOM from 'react-dom';



window.renderPage = function(reactPage) {
    switch (reactPage) {
        case "home":
            if (document.getElementById('home')) {
                ReactDOM.render(<Home />, document.getElementById('home'));
            }
            break;
        // case "dashboard":
        //     if (document.getElementById('dashboard')) {
        //         ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
        //     }
        //     break;
        default:
            break;
    }
}
// export default  {
//     renderPage: function(reactPage) {
//         switch (reactPage) {
//             case "home":
//                 if (document.getElementById('home')) {
//                     ReactDOM.render(<Home />, document.getElementById('home'));
//                 }
//                 break;
//             case "dashboard":
//                 if (document.getElementById('dashboard')) {
//                     ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
//                 }
//                 break;
//             default:
//                 break;
//         }
//     }
//   };