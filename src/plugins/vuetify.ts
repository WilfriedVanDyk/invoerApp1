import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    //does not work this time:  
    //success: colors.purple.darken1,
    //warning: colors.brown.lighten1,
    // icons: {
    //   iconfont: 'mdi',
    // },
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        info: colors.grey.lighten1,
        success: colors.purple.darken1,
        warning: colors.brown.lighten1,
      },
    },
  },
})


// export default new Vuetify({
//     theme: {
//         //dark: true,
//         dark: true,
//               themes: {
//                 light: {
//                   background: colors.grey.darken1,
//                 }
//             }
//     }

// });

// export default new Vuetify({
//     icons: {
//       iconfont: 'mdi',
//     },
//     theme: {
//       dark: true,
//       themes: {
//         dark: {
//           background: colors.grey.darken4,
//         }
//       }
//     }
//   });



