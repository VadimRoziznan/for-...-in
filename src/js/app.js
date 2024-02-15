import { Character, orderByProps} from "./class/spongebob";

const SpongeBob = new Character('Губка Боб');
const orderByPropsSpongeBob = orderByProps(SpongeBob, ["name", "level"])

console.log(orderByPropsSpongeBob)