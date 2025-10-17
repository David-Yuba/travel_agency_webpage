import fs from "node:fs";
import process from "node:process";

const componentName = process.argv[2];
const content = `import styles from "./${componentName.toLocaleLowerCase()}.module.css";

export default function ${componentName}(){

    return (
        <div style={styles}>

        </div>
    )
}`;

fs.mkdirSync(`./src/components/${componentName}`,)

fs.writeFile(`./src/components/${componentName}/${componentName}.tsx`, content, {flag: "w+"}, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

fs.writeFile(`./src/components/${componentName.toLocaleLowerCase()}/${componentName}.module.css`, "", {flag: "w+"}, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});