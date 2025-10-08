import { toast } from 'react-toastify';

const getStoredApps = () => {
    const storedAppsSTR = localStorage.getItem("appsList");

    if (storedAppsSTR) {
        const storedAppsData = JSON.parse(storedAppsSTR);
        return storedAppsData;
    } else {
        return [];
    }
}

const addToStoredDB = (id, title) => {
    const storedAppsData = getStoredApps();

    if (storedAppsData.includes(id)) {
        toast(`${title} Already Installed`);
    } else {
        storedAppsData.push(id);
        const data = JSON.stringify(storedAppsData);
        localStorage.setItem("appsList", data);
        toast(`${title} Installed Successfully`);
    }
}

const checkStoredDB = (id) => {
    const checkAppData = getStoredApps();

    if (checkAppData.includes(id)) {
        return true;
    }
}

const storedAppInDB = () => {
    return getStoredApps();
}

const removeFromLS = (id) => {
    const installedApps = getStoredApps();
    const apps = installedApps.filter(appId => parseInt(appId) !== id);
    localStorage.setItem("appsList", JSON.stringify(apps));
    toast("App Uninstalled");
}

export { getStoredApps, addToStoredDB, checkStoredDB, storedAppInDB, removeFromLS };