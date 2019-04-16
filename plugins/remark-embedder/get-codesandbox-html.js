const { URL } = require('url');

function shouldTransform(string) {
  return getUrl(string) !== null;
}

function getUrl(string) {
  if (!string.includes('codesandbox.io/s/')) {
    return null;
  }
  if (!string.startsWith('http')) {
    string = `https://${string}`;
  }
  let url;
  try {
    url = new URL(string);
  } catch (error) {
    return null;
  }
  if (!url.host.endsWith('codesandbox.io')) {
    return null;
  }
  return url;
}

function getCodeSandboxHTML(string) {
  const iframeUrl = string.replace('/s/', '/embed/');
  return `<iframe class="iframe-embed" src="${iframeUrl}" style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"></iframe>`;
}

module.exports = getCodeSandboxHTML;
module.exports.shouldTransform = shouldTransform;
