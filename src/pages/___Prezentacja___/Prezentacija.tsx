// @ts-nocheck
import { useState, useEffect } from "react";

import GeneralSlide from "./slides/generalslide/GeneralSlide";
import TitleSlide from "./slides/titleslide/TitleSlide";
import GitNodeCont from "./components/gitnodecont/GitNodeCont";
import GitNode from "./components/gitnodecont/GitNode";

import "./slides/slide.css";
import ScrollSlide from "./slides/scrollslide/ScrollSlide";

export default function Prezentacija(){
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(drawNodeLinks)


  function drawNodeLinks(){
    const nodes = Array.from(document.getElementsByClassName("node"));
    nodes.forEach(function(node){
      (node as HTMLElement).style.setProperty("--link-length",`${64}px`);
      (node as HTMLElement).style.setProperty("--node-width",`${node.getBoundingClientRect().width}px`);
      (node as HTMLElement).style.setProperty("--node-height",`${node.getBoundingClientRect().height}px`);
      console.log(getComputedStyle(node).getPropertyValue("--link-length")); 
    })
  }
  return (
    <>
      <TitleSlide currentSlide={currentSlide} slideNum={0}>
        <h1 style={{gridColumn: "span 12", gridRow: "5 / 6"}}>Web stranica putničke agencije</h1>
      </TitleSlide>
      <GeneralSlide currentSlide={currentSlide} slideNum={1}>
        <header style={{gridColumn: "span 12", gridRow: "5 / 6"}}>
          <h1>Ograničenja</h1>
        </header>
        <main style={{gridColumn: "span 6", gridRow: "7 / 8"}}>
          <h4>Ograničenja zadana u zadatku:</h4>
          <ul>
            <li>Dizajn</li>
            <li>Redosljed rješavanja podzadataka</li>
            <li>Git commitovi</li>
          </ul>
          <h4>Ograničenja kojih sam se nepisano držao:</h4>
          <ul>
            <li>Typescript</li>
            <li>Minimalni broj css class selectora</li>
            <li>.module.css za ograničavanje css</li>
          </ul>
        </main>
        <aside style={{gridColumn: "span 6", gridRow: "7 / 8"}}>

        </aside>
      </GeneralSlide>
      <GeneralSlide currentSlide={currentSlide} slideNum={2}>
        <header style={{gridColumn: "span 12", gridRow: "5 / 6"}}>
          <h1>Git</h1>
        </header>
        <main style={{gridColumn: "span 12", gridRow: "7 / 8"}}>
          <GitNodeCont>
            <GitNode nodeIndex={0}>Init</GitNode>
            <GitNode nodeIndex={1}>Global layout with header, footer and routing</GitNode>
            <GitNode nodeIndex={2}>Seed data for tours</GitNode>
            <GitNode nodeIndex={3}>Core components (Banner, TourCard, Acordion, ContactForm)</GitNode>
            <GitNode nodeIndex={4}>Pages scaffolded with routing</GitNode>
            <GitNode nodeIndex={5}>Responsive header/menu and grids</GitNode>
            <GitNode nodeIndex={6}>Contact form validation</GitNode>
            <GitNode nodeIndex={7}>UX polish(hover, focus, active states)</GitNode>
            <GitNode nodeIndex={8}>Add project README and some UX improvments</GitNode>
            <GitNode dotColor="yellow" nodeIndex={9}>Webpack build config</GitNode>
            <GitNode dotColor="red" nodeIndex={10}>Added prezentacija page</GitNode>
          </GitNodeCont>
        </main>
      </GeneralSlide>
      {/* Init */}
      <ScrollSlide currentSlide={currentSlide} slideNum={3}>
        <header><h1>Init</h1></header>
        <main maincomps= "true">
          <div>
            <h3>Main.tsx</h3>
            <ul>
              <li>import globalnih stilova</li>
            </ul>
          </div>
          <div>
          <h3>Dev functions</h3>
            <div style={{display: "grid", gridTemplateColumns: "1fr ", gridTemplateRows: "auto auto", justifyContent: "center", alignItems: "center"}}>
              <h4>createComponent</h4>
              <div>
                <p>{"\x69\x6d\x70\x6f\x72\x74\x20\x73\x74\x79\x6c\x65\x73\x20\x66\x72\x6f\x6d\x20\x22\x2e\x2f\x24\x7b\x63\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4e\x61\x6d\x65\x2e\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x4c\x6f\x77\x65\x72\x43\x61\x73\x65\x28\x29\x7d\x2e\x6d\x6f\x64\x75\x6c\x65\x2e\x63\x73\x73\x22\x3b"}</p>
                <br></br>
                <p>{"\x65\x78\x70\x6f\x72\x74\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x24\x7b\x63\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4e\x61\x6d\x65\x7d\x28\x29\x7b"}</p>
                <br></br>
                <p style={{paddingLeft: "16px"}}>{"\x72\x65\x74\x75\x72\x6e\x20\x28"}</p>
                <p style={{paddingLeft: "32px"}}>{"\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x4e\x61\x6d\x65\x3d\x7b\x5c\x60\x5c\x24\x7b\x73\x74\x79\x6c\x65\x73\x2e\x24\x7b\x63\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4e\x61\x6d\x65\x2e\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x4c\x6f\x77\x65\x72\x43\x61\x73\x65\x28\x29\x7d\x7d\x20\x24\x7b\x63\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x4e\x61\x6d\x65\x2e\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x4c\x6f\x77\x65\x72\x43\x61\x73\x65\x28\x29\x7d\x5c\x60\x7d\x3e"}</p>
                <br /><br />
                <p style={{paddingLeft: "32px"}}>{"\x3c\x2f\x64\x69\x76\x3e"}</p>
                <p style={{paddingLeft: "16px"}}>{"\x29"}</p>
                <p>{"\x7d"}</p>
              </div>
              <h4>createPage</h4>
              <div>
                <p>{"\x69\x6d\x70\x6f\x72\x74\x20\x42\x61\x6e\x6e\x65\x72\x20\x66\x72\x6f\x6d\x20\x22\x2e\x2e\x2f\x2e\x2e\x2f\x63\x6f\x6d\x70\x6f\x6e\x65\x6e\x74\x73\x2f\x42\x61\x6e\x6e\x65\x72\x2f\x42\x61\x6e\x6e\x65\x72\x22\x3b"}</p>
                <br></br>
                <p>{"\x69\x6d\x70\x6f\x72\x74\x20\x73\x74\x79\x6c\x65\x73\x20\x66\x72\x6f\x6d\x20\x22\x2e\x2f\x24\x7b\x70\x61\x67\x65\x4e\x61\x6d\x65\x2e\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x4c\x6f\x77\x65\x72\x43\x61\x73\x65\x28\x29\x7d\x2e\x6d\x6f\x64\x75\x6c\x65\x2e\x63\x73\x73\x22\x3b"}</p>
                <p>{"\x69\x6d\x70\x6f\x72\x74\x20\x62\x61\x6e\x6e\x65\x72\x49\x6d\x67\x20\x66\x72\x6f\x6d\x20\x22\x2e\x2e\x2f\x2e\x2e\x2f\x61\x73\x73\x65\x74\x73\x2f\x69\x6d\x61\x67\x65\x31\x2e\x6a\x70\x67\x22\x3b"}</p>
                <br></br>
                <p>{"\x65\x78\x70\x6f\x72\x74\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x24\x7b\x70\x61\x67\x65\x4e\x61\x6d\x65\x7d\x28\x29\x7b"}</p>
                <br />
                <p style={{paddingLeft: "16px"}}>{"\x72\x65\x74\x75\x72\x6e\x20\x28"}</p>
                <p style={{paddingLeft: "32px"}}>{"\x3c\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x4e\x61\x6d\x65\x3d\x7b\x5c\x60\x5c\x24\x7b\x73\x74\x79\x6c\x65\x73\x2e\x24\x7b\x70\x61\x67\x65\x4e\x61\x6d\x65\x2e\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x4c\x6f\x77\x65\x72\x43\x61\x73\x65\x28\x29\x7d\x7d\x20\x24\x7b\x70\x61\x67\x65\x4e\x61\x6d\x65\x2e\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x4c\x6f\x77\x65\x72\x43\x61\x73\x65\x28\x29\x7d\x5c\x60\x7d\x3e"}</p>
                <p style={{paddingLeft: "48px"}}>{"\x3c\x42\x61\x6e\x6e\x65\x72\x20\x69\x6d\x61\x67\x65\x3d\x7b\x62\x61\x6e\x6e\x65\x72\x49\x6d\x67\x7d\x3e\x24\x7b\x70\x61\x67\x65\x4e\x61\x6d\x65\x7d\x3c\x2f\x42\x61\x6e\x6e\x65\x72\x3e"}</p>
                <p style={{paddingLeft: "48px"}}>{"\x3c\x6d\x61\x69\x6e\x3e"}</p>
                <br/>
                <p style={{paddingLeft: "48px"}}>{"\x3c\x2f\x6d\x61\x69\x6e\x3e"}</p>
                <p style={{paddingLeft: "32px"}}>{"\x3c\x2f\x64\x69\x76\x3e"}</p>
                <p style={{paddingLeft: "16px"}}>{"\x29"}</p>
                <p>{"\x7d"}</p>
              </div>
            </div>
          </div>
        </main>
      </ScrollSlide>
      {/* Global layout with header, footer and routing */}
      <ScrollSlide currentSlide={currentSlide} slideNum={4}>
        <header><h1>Global layout with header, footer and routing</h1></header>
        <main maincomps= "true">
          <div>
            <h3>App.tsx</h3>
            <ul>
              <li>Routes</li>
            </ul>
          </div>
          <div>
          <h3>Layout.tsx</h3>
            <ul>
              <li>Zajednički layout između stranica</li>
              <li>mobileLayout.css i desktopLayout.css</li>
            </ul>
          </div>
          <div>
            <h3>Individualne komponente:</h3>
            <h4>Header.tsx</h4>
            <ul>
              <li>osnovna struktura komponente</li>
              <li>responzivnost</li>
            </ul>
            <h4>Footer.tsx</h4>
            <ul>
              <li>NavLinks.tsx</li>
            </ul>
            <h4>Test.tsx</h4>
            <ul>
              <li>Pomoćna stranica za debugiranje</li>
            </ul>
          </div>
        </main>
      </ScrollSlide>
      {/* Seed data for tours */}
      <ScrollSlide currentSlide={currentSlide} slideNum={5}>
        <header><h1>Seed data for tours</h1></header>
        <main maincomps= "true">
          <div>
            <h3>Type</h3>
            <textarea cols="60" rows="14" disabled>{"\u0074\u0079\u0070\u0065\u0020\u0054\u006f\u0075\u0072\u0044\u0061\u0074\u0061\u0020\u003d\u0020\u007b\u000a\u0020\u0020\u0069\u0064\u003a\u0020\u006e\u0075\u006d\u0062\u0065\u0072\u003b\u000a\u0020\u0020\u0074\u0069\u0074\u006c\u0065\u003a\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u003b\u000a\u0020\u0020\u0063\u0061\u0074\u0065\u0067\u006f\u0072\u0079\u003a\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u003b\u000a\u0020\u0020\u0064\u0065\u0073\u0074\u0069\u006e\u0061\u0074\u0069\u006f\u006e\u003a\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u003b\u000a\u0020\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u003a\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u003b\u000a\u0020\u0020\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u003a\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u003b\u000a\u0020\u0020\u006c\u006f\u006e\u0067\u0044\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u003a\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u003b\u000a\u0020\u0020\u0070\u0072\u0069\u0063\u0065\u003a\u0020\u006e\u0075\u006d\u0062\u0065\u0072\u003b\u000a\u0020\u0020\u0069\u006d\u0061\u0067\u0065\u003a\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u003b\u000a\u0020\u0020\u0069\u006d\u0061\u0067\u0065\u004c\u0061\u0072\u0067\u0065\u003a\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u003b\u000a\u0020\u0020\u0064\u0061\u0074\u0065\u0073\u003a\u0020\u0041\u0072\u0072\u0061\u0079\u003c\u0073\u0074\u0072\u0069\u006e\u0067\u003e\u003b\u000a\u007d\u000a\u0074\u0079\u0070\u0065\u0020\u0054\u006f\u0075\u0072\u0073\u0020\u003d\u0020\u0041\u0072\u0072\u0061\u0079\u003c\u0054\u006f\u0075\u0072\u0044\u0061\u0074\u0061\u003e"}</textarea>
          </div>
        </main>
      </ScrollSlide>
      {/* Core components (Banner, TourCard, Accordion, ContactForm) */}
      <ScrollSlide currentSlide={currentSlide} slideNum={6}>
        <header><h1>Core components (Banner, TourCard, Accordion, ContactForm)</h1></header>
        <main maincomps= "true">
          <div>
            <h3>Accordion.tsx</h3>
            <h4>Props:</h4>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>children</td>
                  <td>question</td>
                  <td>open</td>
                  <td>setOpen</td>
                  <td>index</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>string</td>
                  <td>string</td>
                  <td>boolean</td>
                  <td>{"React.Dispatch<React.SetStateAction<Array<boolean>>>"}</td>
                  <td>number</td>
                </tr>
              </tbody>
            </table>
            <h3>Banner.tsx</h3>
            <h4>Props:</h4>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>children</td>
                  <td>image</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>string</td>
                  <td>string</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3>Cards.tsx</h3>
            <ul>
              <li>display: grid</li>
            </ul>
            <h4>Props:</h4>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>CardType</td>
                  <td>cardDataArray</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>{"({cardData}:{cardData: TourData | string}) => JSX.Element"}</td>
                  <td>{"Tours | Array<string>"}</td>
                </tr>
              </tbody>
            </table>
            <h4>Card types</h4>
            <ul>
              <li>TourCard</li>
              <li>CategoryCard</li>
            </ul>
          </div>
          <div>
            <h3>ContactForm.tsx</h3>
            <ul>
              <li>useFormData()</li>
              <li>createControlData(fieldName: string)</li>
              <li>{"onSubmit(e: React.FormEvent<HTMLFormElement>)"}</li>
            </ul>
            <h4>FormFields</h4>
            <ul>
              <li>{"handleChange(e: React.ChangeEvent<HTMLInputElement>)"}</li>
            </ul>
            <h5>FormFields props</h5>
            <table>
              <thead rowheading={"true"}>
                <tr>
                  <td>FieldName</td>
                  <td  colSpan={10} style={{textAlign: "center"}}>props</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={1} style={{verticalAlign: "middle"}}>CheckboxInput</td>
                  <tr>
                    <td>children</td>
                    <td>validateData</td>
                    <td>validateData</td>
                    <td>name</td>
                  </tr>
                  <tr>
                    <td>string</td>
                    <td>formControlData</td>
                    <td>FormFieldControlData</td>
                    <td>string</td>
                  </tr>
                </tr>
                <tr>
                  <td rowSpan={1} style={{verticalAlign: "middle"}}>SelectInput</td>
                  <tr>
                    <td>children</td>
                    <td>validateData</td>
                    <td>validateData</td>
                    <td>name</td>
                  </tr>
                  <tr>
                    <td>string</td>
                    <td>formControlData</td>
                    <td>FormFieldControlData</td>
                    <td>string</td>
                  </tr>
                </tr>
                <tr>
                  <td rowSpan={1} style={{verticalAlign: "middle"}}>TextareaInput</td>
                  <tr>
                    <td>children</td>
                    <td>validateData</td>
                    <td>validateData</td>
                    <td>name</td>
                    <td>HTML props</td>
                  </tr>
                  <tr>
                    <td>string</td>
                    <td>formControlData</td>
                    <td>FormFieldControlData</td>
                    <td>string</td>
                    <td>{"{placeholder: string}"}</td>
                  </tr>
                </tr>
                <tr>
                  <td rowSpan={1} style={{verticalAlign: "middle"}}>TextInput</td>
                  <tr>
                    <td>children</td>
                    <td>validateData</td>
                    <td>validateData</td>
                    <td>name</td>
                    <td>HTML props</td>
                  </tr>
                  <tr>
                    <td>string</td>
                    <td>formControlData</td>
                    <td>FormFieldControlData</td>
                    <td>string</td>
                    <td>{"{placeholder: string}"}</td>
                  </tr>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </ScrollSlide>
      {/* Pages scaffolded with routing */}
      <ScrollSlide currentSlide={currentSlide} slideNum={7}>
        <header><h1>Pages scaffolded with routing</h1></header>
        <main maincomps= "true">
          <div>
            <h3>Home, About, Contact pages</h3>
            <h4>Default page structure:</h4>
            <p>{"div[class= <page-name>] > Banner, main > sections"}</p>
            <h4>Default page styling</h4>
            <div style={{display: "grid", gridTemplateColumns: "350px auto"}}>
              <textarea cols="60" rows="15" disabled>{"\u002f\u002a\u0020\u0048\u0065\u0061\u0064\u0065\u0072\u002c\u0020\u006d\u0061\u0069\u006e\u002c\u0020\u0066\u006f\u006f\u0074\u0065\u0072\u0020\u0073\u0065\u0063\u0074\u0069\u006f\u006e\u0020\u002a\u002f\u000a\u0020\u0020\u0020\u0020\u002f\u002a\u0020\u0042\u0061\u0073\u0069\u0063\u0020\u002a\u002f\u000a\u0062\u006f\u0064\u0079\u0020\u007b\u000a\u0020\u0020\u0020\u0020\u006f\u0076\u0065\u0072\u0066\u006c\u006f\u0077\u002d\u0078\u003a\u0020\u0068\u0069\u0064\u0064\u0065\u006e\u003b\u000a\u0020\u0020\u0020\u0020\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u0020\u0031\u0030\u0030\u0076\u0068\u003b\u000a\u000a\u0020\u0020\u0020\u0020\u0064\u0069\u0073\u0070\u006c\u0061\u0079\u003a\u0020\u0066\u006c\u0065\u0078\u003b\u000a\u0020\u0020\u0020\u0020\u0066\u006c\u0065\u0078\u002d\u0064\u0069\u0072\u0065\u0063\u0074\u0069\u006f\u006e\u003a\u0020\u0063\u006f\u006c\u0075\u006d\u006e\u003b\u000a\u007d\u000a\u000a\u0062\u006f\u0064\u0079\u0020\u003e\u0020\u0064\u0069\u0076\u0020\u003e\u0020\u006d\u0061\u0069\u006e\u0020\u007b\u000a\u0020\u0020\u0020\u0020\u0064\u0069\u0073\u0070\u006c\u0061\u0079\u003a\u0020\u0066\u006c\u0065\u0078\u003b\u000a\u0020\u0020\u0020\u0020\u0066\u006c\u0065\u0078\u002d\u0064\u0069\u0072\u0065\u0063\u0074\u0069\u006f\u006e\u003a\u0020\u0063\u006f\u006c\u0075\u006d\u006e\u003b\u000a\u0020\u0020\u0020\u0020\u0067\u0061\u0070\u003a\u0020\u0031\u0032\u0070\u0078\u003b\u000a\u007d"}</textarea>
              <textarea cols="60" rows="15" disabled>{"\u0020\u0020\u0020\u0020\u002f\u002a\u0020\u0042\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u0073\u0020\u002a\u002f\u000a\u0062\u006f\u0064\u0079\u0020\u003e\u0020\u0064\u0069\u0076\u003a\u0066\u0069\u0072\u0073\u0074\u002d\u0063\u0068\u0069\u006c\u0064\u0020\u002c\u0020\u0062\u006f\u0064\u0079\u0020\u003e\u0020\u0064\u0069\u0076\u003a\u006c\u0061\u0073\u0074\u002d\u0063\u0068\u0069\u006c\u0064\u0020\u007b\u000a\u0020\u0020\u0020\u0020\u0063\u006f\u006c\u006f\u0072\u003a\u0020\u0076\u0061\u0072\u0028\u002d\u002d\u0062\u0067\u0029\u003b\u000a\u0020\u0020\u0020\u0020\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u002d\u0063\u006f\u006c\u006f\u0072\u003a\u0020\u0076\u0061\u0072\u0028\u002d\u002d\u0070\u0072\u0069\u006d\u0061\u0072\u0079\u0029\u003b\u000a\u007d\u000a\u0062\u006f\u0064\u0079\u0020\u003e\u0020\u0064\u0069\u0076\u003a\u006e\u0074\u0068\u002d\u0063\u0068\u0069\u006c\u0064\u0028\u0032\u0029\u007b\u000a\u0020\u0020\u0020\u0020\u0066\u006c\u0065\u0078\u002d\u0067\u0072\u006f\u0077\u003a\u0020\u0031\u003b\u000a\u0020\u0020\u0020\u0020\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u002d\u0063\u006f\u006c\u006f\u0072\u003a\u0020\u0076\u0061\u0072\u0028\u002d\u002d\u0062\u0067\u0029\u003b\u000a\u007d"}</textarea>
            </div>
          </div>
          <div>
            <h3>Categories</h3>
            <textarea cols="60" rows="1" disabled>{"const cat = new Set(tours.map(t => t.category));"}</textarea>
          </div>
          <div>
            <h3>Tours</h3>
            <h4>Querry string</h4>
            <ul>
              <li>useSearchParams</li>
              <li>default state value</li>
            </ul>
            <h4>Kontrola input polja</h4>
            <textarea cols="100" rows="8" disabled>{"\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e\u0020\u0068\u0061\u006e\u0064\u006c\u0065\u0043\u0068\u0061\u006e\u0067\u0065\u0028\u0065\u003a\u0020\u0052\u0065\u0061\u0063\u0074\u002e\u0043\u0068\u0061\u006e\u0067\u0065\u0045\u0076\u0065\u006e\u0074\u003c\u0048\u0054\u004d\u004c\u0049\u006e\u0070\u0075\u0074\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u003e\u0029\u007b\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0073\u0065\u0074\u0050\u0061\u0072\u0061\u006d\u0073\u0028\u0028\u0073\u0065\u0061\u0072\u0063\u0068\u0050\u0061\u0072\u0061\u006d\u0073\u0029\u0020\u003d\u003e\u0020\u007b\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0073\u0065\u0061\u0072\u0063\u0068\u0050\u0061\u0072\u0061\u006d\u0073\u002e\u0073\u0065\u0074\u0028\u003c\u0050\u0061\u0072\u0061\u006d\u004e\u0061\u006d\u0065\u003e\u002c\u0020\u0065\u002e\u0074\u0061\u0072\u0067\u0065\u0074\u002e\u0076\u0061\u006c\u0075\u0065\u0029\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u0073\u0065\u0061\u0072\u0063\u0068\u0050\u0061\u0072\u0061\u006d\u0073\u003b\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u007d\u0029\u003b\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0073\u0065\u0074\u0053\u0074\u0061\u0074\u0065\u0028\u0065\u002e\u0074\u0061\u0072\u0067\u0065\u0074\u002e\u0076\u0061\u006c\u0075\u0065\u0029\u003b\u000a\u0020\u0020\u007d"}</textarea>
            <h4>Filtriranje tours niza</h4>
            <ul>
              <li>{"searchTours(value: string): Array<TourData>"}</li>
              <li>{"filterTours(c: Array<TourData>): Array<TourData>"}</li>
            </ul>
          </div>
          <div>
            <h3>TourDetails</h3>
            <ul>
              <li>useParams()</li>
              <li>find()</li>
              <li>conditional rendering: tour !== undefined </li>
            </ul>
          </div>
          <div>
            <h3>FAQ</h3>
            <ul>
              <li>useState() za otvaranje samo jednog pitanja od jednom</li>
            </ul>
          </div>
        </main>
      </ScrollSlide>
      {/* Responsive header/menu and grids */}
      <ScrollSlide currentSlide={currentSlide} slideNum={8}>
        <header><h1>Responsive header/menu and grids </h1></header>
        <main maincomps= "true">
          <div>
            <h3>Header responzivnost</h3>
            <textarea cols="60" rows="13" disabled>{"\u0075\u0073\u0065\u0045\u0066\u0066\u0065\u0063\u0074\u0028\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e\u0028\u0029\u007b\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u006f\u006e\u0052\u0065\u0073\u0069\u007a\u0065\u0028\u0029\u003b\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u0069\u006e\u0064\u006f\u0077\u002e\u0061\u0064\u0064\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072\u0028\u0022\u0072\u0065\u0073\u0069\u007a\u0065\u0022\u002c\u0020\u006f\u006e\u0052\u0065\u0073\u0069\u007a\u0065\u0029\u003b\u000a\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e\u0028\u0029\u007b\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u0069\u006e\u0064\u006f\u0077\u002e\u0072\u0065\u006d\u006f\u0076\u0065\u0045\u0076\u0065\u006e\u0074\u004c\u0069\u0073\u0074\u0065\u006e\u0065\u0072\u0028\u0022\u0072\u0065\u0073\u0069\u007a\u0065\u0022\u002c\u0020\u006f\u006e\u0052\u0065\u0073\u0069\u007a\u0065\u0029\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007d\u000a\u0020\u0020\u0020\u0020\u007d\u0029\u000a\u000a\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e\u0020\u006f\u006e\u0052\u0065\u0073\u0069\u007a\u0065\u0028\u0029\u007b\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0069\u0066\u0028\u0077\u0069\u006e\u0064\u006f\u0077\u002e\u0069\u006e\u006e\u0065\u0072\u0057\u0069\u0064\u0074\u0068\u0020\u003e\u003d\u0020\u0037\u0036\u0038\u0029\u0020\u0073\u0065\u0074\u0049\u0073\u004d\u006f\u0062\u0069\u006c\u0065\u0028\u0066\u0061\u006c\u0073\u0065\u0029\u003b\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0065\u006c\u0073\u0065\u0020\u0073\u0065\u0074\u0049\u0073\u004d\u006f\u0062\u0069\u006c\u0065\u0028\u0074\u0072\u0075\u0065\u0029\u003b\u000a\u007d"}</textarea>
          </div>
          <div>
            <h3>Layout</h3>
            <ul>
              <li>mobileLayout.css</li>
              <li>desktopLayout.css</li>
            </ul>
          </div>
          <div>
            <h3>Main content frame</h3>
            <textarea cols="60" rows="7" disabled>{"\u0062\u006f\u0064\u0079\u0020\u003e\u0020\u0064\u0069\u0076\u0020\u003e\u0020\u0068\u0065\u0061\u0064\u0065\u0072\u002c\u0020\u0062\u006f\u0064\u0079\u0020\u003e\u0020\u0064\u0069\u0076\u0020\u003e\u0020\u006d\u0061\u0069\u006e\u002c\u0020\u0062\u006f\u0064\u0079\u0020\u003e\u0020\u0064\u0069\u0076\u0020\u003e\u0020\u0066\u006f\u006f\u0074\u0065\u0072\u0020\u007b\u000a\u0020\u0020\u0020\u0020\u006d\u0061\u0078\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u0020\u0039\u0039\u0032\u0070\u0078\u003b\u000a\u0020\u0020\u0020\u0020\u006d\u0061\u0072\u0067\u0069\u006e\u003a\u0020\u0030\u0020\u0061\u0075\u0074\u006f\u003b\u000a\u0020\u0020\u0020\u0020\u000a\u0020\u0020\u0020\u0020\u002d\u002d\u0070\u0061\u0064\u0064\u0069\u006e\u0067\u002d\u0072\u002d\u006c\u003a\u0020\u0033\u0032\u0070\u0078\u003b\u000a\u0020\u0020\u0020\u0020\u0070\u0061\u0064\u0064\u0069\u006e\u0067\u003a\u0020\u0031\u0036\u0070\u0078\u0020\u0076\u0061\u0072\u0028\u002d\u002d\u0070\u0061\u0064\u0064\u0069\u006e\u0067\u002d\u0072\u002d\u006c\u0029\u003b\u000a\u007d"}</textarea>
          </div>
        </main>
      </ScrollSlide>
      {/* Contact form validation */}
      <ScrollSlide currentSlide={currentSlide} slideNum={9}>
        <header><h1>Contact form validation</h1></header>
        <main maincomps= "true">
          <div>
            <h3>Validator function:</h3>
            <textarea cols="100" rows="1" disabled>{"\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e\u0020\u0076\u0061\u006c\u0069\u0064\u0061\u0074\u0065\u0028\u0076\u0061\u006c\u0075\u0065\u003a\u0020\u0073\u0074\u0072\u0069\u006e\u0067\u002c\u0020\u0066\u0069\u0065\u006c\u0064\u003a\u0020\u006b\u0065\u0079\u006f\u0066\u0020\u0046\u006f\u0072\u006d\u0044\u0061\u0074\u0061\u0029\u003a\u0020\u0028\u0076\u003a\u0020\u0045\u0072\u0072\u006f\u0072\u0029\u0020\u003d\u003e\u0020\u0045\u0072\u0072\u006f\u0072\u0044\u0061\u0074\u0061"}</textarea>
          </div>
        </main>
      </ScrollSlide>
      {/* UX polish (hover, focus, active states) */}
      <ScrollSlide currentSlide={currentSlide} slideNum={10}>
        <header><h1>UX polish (hover, focus, active states)</h1></header>
        <main maincomps= "true">
          <h3>Dodane funkcionalnosti</h3>
          <div>
            <h4>Sticky CTA u TourDetails</h4>
            <textarea cols="100" rows="6" disabled>{"\u002e\u0073\u0074\u0069\u0063\u006b\u0079\u0043\u0074\u0061\u0020\u007b\u000a\u0020\u0020\u0020\u0020\u0070\u006f\u0073\u0069\u0074\u0069\u006f\u006e\u003a\u0020\u0073\u0074\u0069\u0063\u006b\u0079\u003b\u000a\u0020\u0020\u0020\u0020\u0062\u006f\u0074\u0074\u006f\u006d\u003a\u0020\u0036\u0030\u0070\u0078\u003b\u000a\u000a\u0020\u0020\u0020\u0020\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u002d\u0063\u006f\u006c\u006f\u0072\u003a\u0020\u0076\u0061\u0072\u0028\u002d\u002d\u0061\u0063\u0063\u0065\u006e\u0074\u0029\u003b\u000a\u007d"}</textarea>
          </div>
          <div>
            <h4>Proizvoljni input focus stilovi</h4>
            <textarea cols="100" rows="4" disabled>{"\u0069\u006e\u0070\u0075\u0074\u003a\u0066\u006f\u0063\u0075\u0073\u002d\u0076\u0069\u0073\u0069\u0062\u006c\u0065\u002c\u0020\u0074\u0065\u0078\u0074\u0061\u0072\u0065\u0061\u003a\u0066\u006f\u0063\u0075\u0073\u002d\u0076\u0069\u0073\u0069\u0062\u006c\u0065\u007b\u000a\u0020\u0020\u0020\u0020\u006f\u0075\u0074\u006c\u0069\u006e\u0065\u003a\u0020\u006e\u006f\u006e\u0065\u003b\u000a\u0020\u0020\u0020\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u003a\u0020\u0031\u0070\u0078\u0020\u0073\u006f\u006c\u0069\u0064\u0020\u0076\u0061\u0072\u0028\u002d\u002d\u0061\u0063\u0063\u0065\u006e\u0074\u0029\u0020\u0021\u0069\u006d\u0070\u006f\u0072\u0074\u0061\u006e\u0074\u003b\u000a\u007d"}</textarea>
          </div>
          <div>
            <h4>Card hover efekt</h4>
            <textarea cols="100" rows="4" disabled>{"\u002e\u0063\u0061\u0072\u0064\u003a\u0068\u006f\u0076\u0065\u0072\u007b\u000a\u0020\u0020\u0074\u0072\u0061\u006e\u0073\u0066\u006f\u0072\u006d\u003a\u0020\u0073\u0063\u0061\u006c\u0065\u0028\u0031\u002e\u0030\u0032\u0035\u0029\u003b\u000a\u0020\u0020\u0062\u006f\u0078\u002d\u0073\u0068\u0061\u0064\u006f\u0077\u003a\u0020\u0030\u0020\u0036\u0070\u0078\u0020\u0031\u0038\u0070\u0078\u0020\u0072\u0067\u0062\u0061\u0028\u0030\u002c\u0020\u0030\u002c\u0020\u0030\u002c\u0020\u0030\u002e\u0031\u0039\u0032\u0029\u003b\u000a\u007d"}</textarea>
          </div>
        </main>
      </ScrollSlide>
      <TitleSlide currentSlide={currentSlide} slideNum={11}>
        <h1 style={{gridColumn: "span 12", gridRow: "5 / 6"}}>Hvala vam na pažnji</h1>
      </TitleSlide>
      <button className="arrows left" onClick={()=>setCurrentSlide(v => v > 0 ? v-1 : 0)}><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="var(--bg)"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></button>
      <button className="arrows right" onClick={()=>setCurrentSlide(v => v+1)}><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="var(--bg)"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></button>
    </>
  );
}
