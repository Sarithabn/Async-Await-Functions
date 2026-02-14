const loadBtn = document.getElementById("loadBtn");
const loading = document.getElementById("loading");
const userData = document.getElementById("userData");
const userIdInput = document.getElementById("userId");

loadBtn.addEventListener("click", async function () {

    const userId = userIdInput.value;

    if (!userId) {
        alert("Please enter User ID");
        return;
    }

    loading.classList.remove("hidden");
    userData.innerHTML = "";

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json();

        loading.classList.add("hidden");

        userData.innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Username:</strong> ${data.username}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Website:</strong> ${data.website}</p>
            <p><strong>Company:</strong> ${data.company.name}</p>
            <p><strong>City:</strong> ${data.address.city}</p>
        `;

    } catch (error) {
        loading.classList.add("hidden");
        userData.innerHTML = "User not found!";
    }
});
