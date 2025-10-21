# Webpage za travel agenciju 
Projekt za utrđivanje i izvježbavanje osnovnih dijelova react-a, sa dodatnim pokušajem automatizacije često ponovljenih radnji tijekom razvoja react aplikacija (folder /dev_functions).
## Pokretanje aplikacije
Prije pokretanja potrebno je pokrenuti npm install.
Aplikacija se može pokrenuti u developer okruženju pomoću naredbe npm run dev. S obzirom da postoje dvije grane (webpack build i vite build), obje koriste npm run dev ili npm run build, u package.json-u su skripte naravno prilagođene.
Za build aplikacije spreman za produkciju potrebno je pokrenuti npm run build. Ukoliko se build aplikacije želi provjeriti pomoću VS code ekstenzije Live server prvo je potrebno otvoriti dist datoteku u novom prozori i iz tog novog prozora pokrenuti live server. Još jedan dodatan problem sa live serverom je što dodaje script element u body. Zbog toga može doći do poremećenja css selektora jer koristim :nth-child(), :first-child i last-child. Jedno poremećenje koje sam uspio naći je u headeru na about stranici. Header se poveća zbog toga što body > :nth-child(2) padne na njega, nakon što live server doda script element u body. To se jednostavno riješi tako da se taj script izbriše, te vjerujem da nema potrebe koristi drugačije selektore. Vjerujem da ćete na taj bug gledati kao primjer lošeg koda, jer u stvarnoj situaciji (velikom codebase-u) takvi selektori bi mogli dovesti do nepredviđenih situacija, no ja i dalje inzistiram da je ovakav način pisanja selektora daleko bolji iz jednostavnog razloga što zahtjeva da razmišljamo o hijerarhiji html elemenata i o njihovom strogom rasporedu. Ukoliko bi se takav način primijenio na veći codebase, takva pravila bi ponovno bila zapisana, što vjerujem da je moguće, i u ovom readme filu vjerujem da sam to donekle uspio.
## Struktura aplikacije
U ovom dijelu proći ćemo osnovnu strukturu aplikacije i nekih pravila kojih sam se držao tijekom razvoja.
### Pravila za pisanje HTML,tsx-a,css-a i struktura foldera
React root element je body i njegova neposredna djeca su div elementi koji isključivo služe za postavljanje pozadinske boje i ograničavanje css pravila.
Body ima točno troje djece što se vidi iz Layout.tsx elementa. To troje djece su Header.tsx, Footer.tsx, i outlet koji nam predstavlja glavni sadržaj stranice zajedno sa Banner.tsx od svake stranice.
Glavna struktura stranice može se vidjeti u dev_functions/createPage.js.
Css je prvo pisani za mobitele, a pomoću media query-a za računala i veće ekrane.
#### Struktura foldera
##### /src:
* App.tsx služi za postavljanje react ruta za simulaciju više stranica
* Layout.tsx služi za osnovnu strukturu stranice koja podrazumijeva body(id= ReactRoot) -> {Header, Page, Footer}
* main.tsx je entry point koji injecta naš tsx i interpretira ga
##### /assets:
* Sadrži medijski sadržaj potreban stranici
##### /styles:
* /base koja služi za globalne stilove i varijable(global.css i base.css)
* /layout datoteka koja služi prvenstveno za globalne stilove koji se mijenjaju pomoću media query-a
##### /pages:
Sadrži foldere stranica(mogućih ruta). Svaka stranica ima svoju .tsx file i .module.css. Css je pisani tako da je svaki selektor u .module.css-u ograničeni unutar background diva svake stranice.
To osigurava da css napisan u jednoj stranici ne može utjecati na bilo što izvan.
##### /components:
Sadrži foldere komponenata koje u pravili slijede ista pravila kao i stranice (rute) sa nekoliko iznimaka.
#### Pages:
Bazna struktura stranice je div[className=(ime stranice)] -> banner, main -> sections
##### Home:
Bazičan home page sa nekoliko gumba, od kojih je jedan naznačeni kao CTA.
Cards container prikazuje prva tri moguća izleta
##### About:
Bazičan about page sa osnovnim informacijama.
##### Contact:
Kontakt forma (čija će funkcionalnost biti opisana pod ContactForm komponenti) i osnovni podatci za kontaktiranje.
##### Categories:
Dohvaća listu svih putovanja, izvlači njihove kategorije te se rješava duplikata pomoću konstruktora za skup. Nakon toga prikazuje kategorije u obliku CategoryCard unutar Cards containera.
##### Tours:
Dohvaća podatke o svim izletima, te ih filtrira i prikazuje u obliku TourCard elementa unutar Cards containera. Moguće je pretraživati po nazivu, filtrirati po kategoriji i/ili sortirati (po nazivu A-Z, po cijeni uzlazno ili silazno).
##### Faq
Sadrži često postavljena pitanja i njihove odgovore, te ih prikazuje pomoću Accordion elementa.
#### Components:
##### Header
Sadrži osnovnu navigaciju. S obzirom na širinu ekrana odlučuje hoće li prikazati MobileNavigation ili samo NavLinks.
##### Footer
Sadrži Copyright informacije i mini navigaciju.
##### Cards
Container za različite card elemente, koji responzivnost postiže pomoću display grid, i mijenjaja broja stupaca kod određenih min-width-ova.
Cards.tsx prima parametre CardType i cardData. CardType određuje koji element kartice će renderirati, a cardData određuje podatke koji će se u kartici zapisivati. Responzivnost kartica je implementirana unutar desktopLayout.css-a
##### ContactForm
Najkompleksniji element, sadrži dva foldera: FormLogic i FormFields, te bazni .tsx i .module.css file. 
###### FormFields
Sadrži individualna polja za unos podataka. Svaki u sebi sadrži svoj ExtraProps type koji definira koje će dodatne propse primati, svaki sadrži svoj handleChange callback funkciju na onChange, koja osim što upravlja vrijednošću polja, istovremeno i vrši validaciju u skladu sa definiranim validatorima. Validatori se komponenti šalju pomoću validateData propa, a kontrole za vrijednosti polja se šalju pomoću formControlData propa. Uz te propove, važan je i name prop koji određuje ključ pod kojim će se vrijednost polja spremati.
###### FormLogic
FormData sadrži definicije tipa i "construktor" potreban za upravljanje formom. Validators sadrži čiste funkcije koje vraćaju funkcije za ažuriranje errors stata (one se proslijeđuju funkciji setErrors() iz formData).
###### ContactForm.tsx
Sadrži pomoćnu funkciju createControlData, koja u pravilu ne kreira nikakve podatke, samo olakšava vraćanje individualnog FormFieldControlData iz objekta FormData.
OnSubmit funkcija prvo provjerava jesu li svi error array-i prazni, nakon čega provjerava jesu li vrijednosti u poljima prazne. Ukoliko su obje provjere neistinite, u konzolu će poslati podatke, resetirati će vrijednosti u poljima i baciti alert.
#### Poznati bugovi
Sve bugove koje sam pronašao su riješeni. Što se tiče browser support-a, stranica je testirana u chrome-u i firefox-u, te u njima nema bugova. 
Webpack se žali na veličinu build fila i entry pointa, no tu ne vidim svrhu za daljnjim debugiranjem.
Gdje postoji mjesta za poboljšanjem je u ContactFormi, ne u funkcionalnosti nego u korištenju tipova iz typescripta. Vjerujem da bi se cijela komponenta mogla refaktorirati mnogo spretnije, kako bi se povećala mogućnost ponovnog korištenja, i smanjila mogućnost bugova kod budućih prepravaka i dodataka.
Vjerujem da bi se i css mogao bolje strukturirati, posebno što se tiče globalnog css, kako bi smanjio dupliciranje css pravila. Volio bih da je i HTML struktura dosljednija iz elementa u element, no u tome me i dizajn ograničuje.
