const getFromLocalStorage = () => {
  const getdata = localStorage.getItem("appId");

  return getdata ? JSON.parse(getdata) : [];
};

const addToLocalStorage = (id) => {
  const preData = getFromLocalStorage();
  if (preData.includes(id)) {
    alert(" Alredy data Exists");
    return;
  }

  const updated = [...preData, id];
  const updatedData = JSON.stringify(updated);
  localStorage.setItem("appId", updatedData);
};

const deleteLocalStorage = (id) => {
  const preData = getFromLocalStorage();

  const updatedId = preData.filter((data) => data !== id);
  localStorage.setItem("appId", JSON.stringify(updatedId));
};

export {getFromLocalStorage, addToLocalStorage, deleteLocalStorage  }