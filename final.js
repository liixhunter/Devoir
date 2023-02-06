const strengthInput = document.querySelector("#strength");
const intelligenceInput = document.querySelector("#intelligence");
const agilityInput = document.querySelector("#agility");
const characterImg = document.querySelector("#character-img");

strengthInput.addEventListener("input", updateCharacterImage);
intelligenceInput.addEventListener("input", updateCharacterImage);
agilityInput.addEventListener("input", updateCharacterImage);

function updateCharacterImage() {
  const strength = strengthInput.value;
  const intelligence = intelligenceInput.value;
  const agility = agilityInput.value;

## a modifier en fonction classe choisi

  let image = "human.jpeg";
  if (strength > intelligence && strength > agility) {
    image = "strong.jpg";
  } else if (intelligence > strength && intelligence > agility) {
    image = "intelligent.jpg";
  } else if (agility > strength && agility > intelligence) {
    image = "agile.jpg";
  }

  characterImg.src = image;
}

## a modifier

const strengthValue = document.querySelector("#strength-value");
const intelligenceValue = document.querySelector("#intelligence-value");
const agilityValue = document.querySelector("#agility-value");

strengthInput.addEventListener("input", function() {
  strengthValue.textContent = this.value;
});

intelligenceInput.addEventListener("input", function() {
  intelligenceValue.textContent = this.value;
});

agilityInput.addEventListener("input", function() {
  agilityValue.textContent = this.value;
});
