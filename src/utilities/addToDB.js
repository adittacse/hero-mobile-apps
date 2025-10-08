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

// add to wishlist
// const getWishlistBook = () => {
//     const wishlistBookSTR = localStorage.getItem("wishlist");

//     if (wishlistBookSTR) {
//         const wishlistBookData = JSON.parse(wishlistBookSTR);
//         return wishlistBookData;
//     } else {
//         return [];
//     }
// }

// const addToWishlistDB = (id) => {
//     const wishlistBookData = getWishlistBook();

//     if (wishlistBookData.includes(id)) {
//         Swal.fire({
//             title: "Book already in Wishlist",
//             showClass: {
//                 popup: `
//                 animate__animated
//                 animate__fadeInUp
//                 animate__faster
//                 `
//             },
//             hideClass: {
//                 popup: `
//                 animate__animated
//                 animate__fadeOutDown
//                 animate__faster
//                 `
//             }
//         });
//     } else {
//         wishlistBookData.push(id);
//         const data = JSON.stringify(wishlistBookData);
//         localStorage.setItem("wishlist", data);
//         Swal.fire({
//             title: "Added to Wishlist",
//             icon: "success",
//             draggable: true
//         });
//     }
// }

export { getStoredApps, addToStoredDB, checkStoredDB };