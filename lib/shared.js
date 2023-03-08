exports.findRedirect = function (redirects, url) {
  const conf = redirects.find((r) => r[0] === url);
  return conf && conf[1];
};
