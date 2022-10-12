const ul = document.getElementById("tag-ul");
let maxTags = 5,
  selectTagList = [];
createTag();
function createTag() {
  ul.querySelectorAll("li").forEach((li) => li.remove());
  selectTagList
    .slice()
    .reverse()
    .forEach((tag) => {
      let liTag = `<li>${tag} <button class="uit uit-multiply" onclick="remove(this, '${tag}')">x</button></li>`;
      ul.insertAdjacentHTML("afterbegin", liTag);
    });
}
function remove(element, tag) {
  console.log(element);
  let index = selectTagList.indexOf(tag);
  selectTagList = [
    ...selectTagList.slice(0, index),
    ...selectTagList.slice(index + 1),
  ];
  element.parentElement.remove();
}
function addTag(symptomValue) {
  if (symptomValue.length > 1 && !selectTagList.includes(symptomValue)) {
    selectTagList.push(symptomValue);
    createTag();
  }
}

const onTagSearchButtonClick = () => {
  console.log(selectTagList);
};
