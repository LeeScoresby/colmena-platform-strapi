import AuthLogo from './extensions/logo.svg';
import Favicon from './extensions/favicon.svg';

export default {
  config: {
    locales: [
      'es',
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
      es: {
        'Auth.form.welcome.title': '¡Bienvenido a Colmena!',
        'Auth.form.welcome.subtitle': 'Inicie sesión con su cuenta',
        'app.components.LeftMenu.navbrand.title': 'Colmena Dashboard'
      }
    },
  },
  bootstrap(app) {
    // console.log(app);
  },
};
