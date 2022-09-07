// browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   sendResponse("https://www.google.com");
// });
function getlink(n) {
  const temp = localStorage.getItem("links");
  if (temp) {
    return JSON.parse(temp)[n];
  } else {
    return undefined;
  }
}
browser.commands.onCommand.addListener((command) => {
  if (command === "link1") {
    browser.tabs.create({ url: getlink(0) });
  } else if (command === "link2") {
    browser.tabs.create({ url: getlink(1) });
  } else if (command === "link3") {
    browser.tabs.create({ url: getlink(2) });
  } else if (command === "link4") {
    browser.tabs.create({ url: getlink(3) });
  } else if (command === "link5") {
    browser.tabs.create({ url: getlink(4) });
  } else if (command === "link6") {
    browser.tabs.create({ url: getlink(5) });
  } else if (command === "link7") {
    browser.tabs.create({ url: getlink(6) });
  } else if (command === "link8") {
    browser.tabs.create({ url: getlink(7) });
  } else if (command === "link9") {
    browser.tabs.create({ url: getlink(8) });
  }
});
