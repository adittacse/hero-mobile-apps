// import Swal from 'sweetalert2';

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
        alert(`${title} Already Installed`);
        // Swal.fire({
        //     title: "Book already read",
        //     showClass: {
        //         popup: `
        //         animate__animated
        //         animate__fadeInUp
        //         animate__faster
        //         `
        //     },
        //     hideClass: {
        //         popup: `
        //         animate__animated
        //         animate__fadeOutDown
        //         animate__faster
        //         `
        //     }
        // });
    } else {
        storedAppsData.push(id);
        const data = JSON.stringify(storedAppsData);
        localStorage.setItem("appsList", data);
        alert(`${title} Installed Successfully`);
        // Swal.fire({
        //     title: "Added to read list",
        //     icon: "success",
        //     draggable: true
        // });
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
}

export { getStoredApps, addToStoredDB, checkStoredDB, storedAppInDB, removeFromLS };