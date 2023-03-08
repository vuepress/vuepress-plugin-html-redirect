/* global ENABLE_HISTORY_REDIRECT */

import { HTML_DIRECTS } from "@dynamic/html-redirects";
import { findRedirect } from "./shared";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer, // is this enhancement applied in server-rendering or client
}) => {
  if (!isServer && ENABLE_HISTORY_REDIRECT) {
    router.beforeEach((to, from, next) => {
      const redirectUrl = findRedirect(HTML_DIRECTS, to.path);
      if(redirectUrl){
        next(redirectUrl)
      } else {
        next()
      }
    })
  }
};
