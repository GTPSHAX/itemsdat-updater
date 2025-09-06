import consola from "consola";
import fs from "fs";
import { input } from "./utils/input";

const tData = {
  updateVersion: false,
  ignoreHash: false
};

(async () => {
  if (!fs.existsSync("dist/RGT.json")) {
    consola.error("RGT.json not found in dist folder");
    process.exit(1);
  }
  if (!fs.existsSync("dist/items.json")) {
    consola.error("items.json not found in dist folder");
    process.exit(1);
  }

  const rgtData = JSON.parse(fs.readFileSync("dist/RGT.json", "utf-8"));
  const itemsData = JSON.parse(fs.readFileSync("dist/items.json", "utf-8"));

  const res = await input("Do you want to ignore hash differences? (y/n): ");
  if (res.toLowerCase() === "y") {
    tData.ignoreHash = true;
    consola.info("Hash differences will be ignored.");
  }

  if (rgtData != itemsData) {
    const res = await input("RGT.json and items.json are different. Do you want to update the version? (y/n): ");
    if (res.toLowerCase() === "y") {
      tData.updateVersion = true;
      consola.info("Version will be updated.");
    } else {
      consola.info("Version will not be updated.");
    }
  }

  // getting item keys
  const rgtKeys = Object.keys(rgtData.items[0]);
  const hashKeys = ["texture_hash", "extra_file_hash"];

  for (let i = 0; i < itemsData.items.length; i++) {
  const item = itemsData.items[i];
  const rgtItem = rgtData.items[i] || {};

  for (const key of Object.keys(item)) {
    if (!(key in rgtKeys)) {
      if (!tData.updateVersion) {
        delete item[key];
        continue;
      };

      item[key] = rgtItem[key];
    } else {
      if (!tData.updateVersion) {
        delete item[key];
        continue;
      };
      if (hashKeys.includes(key) && tData.ignoreHash) continue;

      item[key] = rgtItem[key] || item[key];
    }
  }
}

  // update stats
  if (tData.updateVersion) {
    itemsData.version = rgtData.version;
    consola.info(`Version updated to ${rgtData.version}`);
  }
  itemsData.item_count = itemsData.items.length;

  // writing to out.json
  fs.writeFileSync("dist/out.json", JSON.stringify(itemsData, null, 2), "utf-8");
  consola.success("out.json has been created in dist folder");
})();