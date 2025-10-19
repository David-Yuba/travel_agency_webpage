import fs from "node:fs";
import process from "node:process";

const pageName = process.argv[2]
const content = `import styles from "./${pageName.toLocaleLowerCase()}.module.css";

export default function ${pageName}(){

    return (
        <div className={\`\${styles.${pageName.toLocaleLowerCase()}} ${pageName.toLocaleLowerCase()}\`}>
          <main>

          </main>
        </div>
    )
}`

fs.mkdirSync(`./src/pages/${pageName}`,)

fs.writeFile(`./src/pages/${pageName}/${pageName}.tsx`, content, {flag: "w+"}, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

fs.writeFile(`./src/pages/${pageName.toLocaleLowerCase()}/${pageName}.module.css`, `.${pageName.toLocaleLowerCase()} {\n\n}`, {flag: "w+"}, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});