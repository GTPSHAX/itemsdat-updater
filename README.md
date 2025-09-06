# itemsdat-updater

> A utility for updating your Growtopia `items.dat`, powered by [GrowTools by GuckTubeYT](https://github.com/GuckTubeYT/GrowTools).

## Table of Contents
- [How It Works](#how-it-works)
- [Usage Guide](#usage-guide)
- [Requirements](#requirements)
- [Contributing](#contributing)
- [Support](#support)

## How It Works

In short, this tool compares two data files (`items.json` and `RGT.json`) and updates accordingly.  

> [!NOTE]  
> - `items.json` is the decoded `items.dat` you want to update.  
> - `RGT.json` is the decoded `items.dat` that serves as the reference for updating `items.json`.  

## Usage Guide

1. Decode both `items.dat` files using [GrowTools](https://gucktubeyt.github.io/GrowTools/).  
2. Rename the reference `items.json` to **RGT.json**.  
3. Place both `items.json` and `RGT.json` into the `/dist` folder of this project.  
4. Run `run.bat` if you are on Windows.  

```bash
PS D:\workspace\itemsdat-updter> ./run
Select runtime [0]:
[0] BunJS
[1] NodeJS
>
````

5. When executing `run.bat`, you will be prompted to choose the runtime.

   > **Recommendation:** Use **BunJS** for faster performance.

```bash
Starting BunJS runtime...
$ bun run src/main.ts
Do you want to ignore hash differences? (y/n):
```

6. If you choose `y`, hash differences between `RGT.json` and `items.json` will be ignored.
   Otherwise, the hash in `items.json` will be updated to match the one in `RGT.json`.

```bash
RGT.json and items.json are different. Do you want to update the version? (y/n): 
```

7. This message will appear if there is a version mismatch between the two files.

```bash
✔ out.json has been created in dist folder
```

8. If you see this message, the update process has completed successfully and you can check the output file in `/dist/out.json`.

## Requirements

* [NodeJS v22.18.0+](https://nodejs.org/en/download) or [BunJS v1.2.21+](https://bun.com)
* `items.json` (decoded with [GrowTools](https://gucktubeyt.github.io/GrowTools/))

---

## Contributing

Contributions are always welcome! 🎉
If you would like to improve this project, feel free to fork the repository and submit a pull request.

## Support

If you encounter any issues or have questions, please [open an issue](./issues).
Your feedback helps make this project better.