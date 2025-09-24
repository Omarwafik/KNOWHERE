const fs = require("fs");
const { launch } = require("chrome-launcher");

async function getLighthouse() {
  const mod = await import("lighthouse");
  return mod.default || mod;
}

// 🔹 هنا تحط اللينكات اللي عايز تختبرها
const urls = [
  "https://omarwafik.github.io/KNOWHERE/",
  "https://omarwafik.github.io/KNOWHERE/rooms/Shared%20Areas",
  "https://omarwafik.github.io/KNOWHERE/rooms/Meeting%20Rooms",
  "https://omarwafik.github.io/KNOWHERE/rooms/Office",
  "https://omarwafik.github.io/KNOWHERE/home#explore",
];

async function runLighthouse(url, strategy = "mobile") {
  const lighthouse = await getLighthouse();
  const chrome = await launch({ chromeFlags: ["--headless"] });

  const options = {
    logLevel: "error",
    output: "json",
    port: chrome.port,
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    formFactor: strategy,
    screenEmulation:
      strategy === "mobile"
        ? { mobile: true, width: 375, height: 667, deviceScaleFactor: 2, disabled: false }
        : { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false },
  };

  const runnerResult = await lighthouse(url, options);
  await chrome.kill();

  const categories = runnerResult.lhr.categories;
  return {
    url,
    performance: categories.performance.score,
    seo: categories.seo.score,
    accessibility: categories.accessibility.score,
    bestPractices: categories["best-practices"].score,
  };
}

(async () => {
  const results = [];

  for (const url of urls) {
    console.log(`🔎 Auditing: ${url} [mobile] ...`);
    const res = await runLighthouse(url, "mobile");
    results.push(res);
  }

  // حفظ الـ JSON
  fs.writeFileSync("report.json", JSON.stringify(results, null, 2));
  console.log("✅ JSON report saved as report.json");
})();
