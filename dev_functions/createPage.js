import fs from "node:fs";
import process from "node:process";

const pageName = process.argv[2]
const content = `import styles from "./${pageName.toLocaleLowerCase()}.module.css";

export default function ${pageName}(){

    return (
        <main style={styles}>

        </main>
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

fs.writeFile(`./src/pages/${pageName.toLocaleLowerCase()}/${pageName}.module.css`, "", {flag: "w+"}, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});