import { Character, orderByProps } from "../js/class/spongebob";

test('Object test Character', () => {
  const SpongeBob = new Character('Губка Боб');

  const correct = [
    { prop: 'name', value: 'Губка Боб' },
    { prop: 'level', value: 2 },
    { prop: 'attack', value: 80 },
    { prop: 'defence', value: 40 },
    { prop: 'health', value: 10 }
  ]
  expect(orderByProps(SpongeBob, ["name", "level"])).toEqual(correct);
});
