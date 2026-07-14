import { toast } from "react-toastify";

const getFromLS = () => {
  const storeInstallApp = localStorage.getItem("installApp");

  if (storeInstallApp) {
    return JSON.parse(storeInstallApp);
  }

  return [];
};

const saveToLocalS = (storeInstallApp) => {
  localStorage.setItem("installApp", JSON.stringify(storeInstallApp));
};

const addToLocalS = (id) => {
  const storeInstallApp = getFromLS();

  if (storeInstallApp.includes(id)) {
    toast.error("You have already installed this app.");
    return;
  }

  storeInstallApp.push(id);
  saveToLocalS(storeInstallApp);
  toast.success("App is successfull installed.");
};

const removeFromLS = (id) => {
  const storeInstallApp = getFromLS();
  // Since the array contains IDs (numbers)
  const remainApps = storeInstallApp.filter((appId) => appId !== id);

  saveToLocalS(remainApps);
  toast.warn("App is successfull uninstalled.");
};

export { getFromLS, addToLocalS, removeFromLS };
