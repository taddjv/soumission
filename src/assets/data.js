import vie from "./mom.jpg";
import work from "./work.jpg";
import sick from "./sick.jpg";
const data = {
  vie: {
    type: "Assurance Vie",
    text: "L'assurance vie peut aider à couvrir les dépenses telles que les frais funéraires, les dettes impayées et les frais de subsistance en cours, offrant la tranquillité d'esprit que sa famille sera soutenue en son absence.",
    option: true,
    image: vie,
  },
  invalidite: {
    type: "Assurance Invalidité",
    text: "L'assurance invalidité est un produit financier conçu pour offrir une protection en cas d'incapacité de travailler due à une maladie ou un accident.",
    option: false,
    image: work,
  },
  maladie: {
    type: "Assurance Maladie Grave",
    text: "L'assurance maladie grave est un produit d'assurance destiné à offrir un soutien financier en cas de diagnostic de maladies graves spécifiées dans le contrat, telles que le cancer, les maladies cardiaques majeures, ou les AVC.",
    option: false,
    image: sick,
  },
};
export default data;
