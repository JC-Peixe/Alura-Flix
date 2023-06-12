import initialData from "./initial-data.json";


export function getCategoryData() {
  // localStorage.clear();
  let categoryData;
  let storedData = localStorage.getItem("categoryDataKey");
  console.log(storedData)
  if (!storedData) {
    categoryData = initialData;
  } else {
    categoryData = JSON.parse(storedData);
  }
  console.log(categoryData)
  return categoryData;
}

export function setLocalStorage(categoryData) {
  localStorage.setItem("categoryDataKey", JSON.stringify(categoryData));

}

