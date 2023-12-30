let osDetails = {
  name: 'Windows',
  icon: 'fa-question-circle'
};

function getOS() {
    //Windows
    if (navigator.appVersion.indexOf("Win") != -1) {
        osDetails.name = "windows"
        osDetails.icon = 'fa-windows'
    }
  
    //MacOS, MacOS X, macOS
    if (navigator.appVersion.indexOf("Mac") != -1) {
      if (navigator.platform.indexOf("MacPPC") != -1 || navigator.platform.indexOf("PowerPC") != -1) {
        osDetails.name = "macos-intel";
        osDetails.icon = 'fa-apple';
      } else if (navigator.userAgent.indexOf("OS X 10.5") != -1 ||
        navigator.userAgent.indexOf("OS X 10.6") != -1) {
            osDetails.name = "macos-intel";
            osDetails.icon = 'fa-apple';
      } else {
        osDetails.name =  "macos";
        try {
          let glcontext = document.createElement("canvas").getContext("webgl");
          let debugrenderer = glcontext ? glcontext.getExtension('WEBGL_debug_renderer_info') : null;
          let renderername = debugrenderer && glcontext.getParameter(debugrenderer.UNMASKED_RENDERER_WEBGL) || "";
          if (renderername.match(/Apple M/) || renderername.match(/Apple GPU/)) {
            osDetails.name = "macos-apple-silicon";
            osDetails.icon = 'fa-apple'
          }
        } catch (e) {}
      }
    }
    if (navigator.platform.indexOf("Linux") != -1) {
        osDetails.name = "linux"
        osDetails.icon = 'fa-linux'
    }
  //freeBSD
    if (navigator.platform.indexOf("freebsd") != -1){
        osDetails.name = "freebsd";
        osDetails.icon = 'fa-linux'
    }
  }
  getOS()
  updateOsDownloadButton(osDetails);


function updateOsDownloadButton(osDetails) {
  let iconHtml = '<i class="icon fab ' + osDetails.icon + '"></i>'
  document.querySelector('.btn-download-os').innerHTML = 'Download for ' + osDetails.name + iconHtml
}