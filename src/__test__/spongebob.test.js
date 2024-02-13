import SpongeBob from "../js/class/spongebob";

test('Object test SpongeBob', () => {
  const friend = new SpongeBob();

  const correct = [
    { prop: 'name', value: 'Губка Боб' },
    { prop: 'level', value: 2 },
    { prop: 'attack', value: 80 },
    { prop: 'defence', value: 40 },
    { prop: 'health', value: 10 }
  ]
  expect(friend.orderByProps(friend, ["name", "level"])).toEqual(correct);
});
