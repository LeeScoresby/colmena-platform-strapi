import AuthLogo from './extensions/logo.svg';
import Favicon from './extensions/favicon.svg';

export default {
  config: {
    locales: [
      'es',
      'en',
    ],
    auth: {
      logo: AuthLogo,
    },
    head: {
      favicon: Favicon,
    },
    menu: {
      logo: Favicon,
    },
    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to Colmena!',
        'Auth.form.welcome.subtitle': 'Log in to your account',
        'app.components.LeftMenu.navbrand.title': 'Colmena Dashboard'
      },
      es: {
        'Auth.form.welcome.title': '¡Bienvenido a Colmena!',
        'Auth.form.welcome.subtitle': 'Inicie sesión con su cuenta',
        'app.components.LeftMenu.navbrand.title': 'Colmena Dashboard'
      }
    },
    theme: {
      colors: {
          primary100: '#00000',
      }
    }
  },
  bootstrap(app) {
    // console.log(app);
  },
};
