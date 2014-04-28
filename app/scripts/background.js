chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('/app/views/main.html', {
    id: "DevApp",
    bounds: {
      width: 1200,
      height: 645
    },
    minWidth: 500,
    minHeight: 645
  });
});