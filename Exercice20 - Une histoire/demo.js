function storyTime(name,number) 
{
    return `Il était une fois un monstre qui s'appelait ${name} et qui avait ${number} enfants.`
};

const monsterName = String(prompt("Saisissez un nom : "));
const childNumber = Number(prompt("Saisissez un nombre : "));

const userStory = storyTime(monsterName, childNumber);

alert(userStory);