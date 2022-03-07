import MenuLogo from "./extensions/Lovelace-Balzac-866w.png";
import LoginLogo from "./extensions/Strapi-login.png";
import Favicon from "./extensions/favicon.ico";

export default {
  config: {
    locales: ["fr"],
    auth: {
      logo: LoginLogo,
    },
    head: {
      favicon: Favicon,
    },
    menu: {
      logo: MenuLogo,
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
