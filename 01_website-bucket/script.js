document.addEventListener("DOMContentLoaded", function () {

    function createContactCards(data) {
        const contactList = document.getElementById("contactList");

        data.forEach(contact => {
            const contactCard = document.createElement("div");
            contactCard.classList.add("card");
            contactCard.innerHTML = `
                <img src="https://my-cors-demo-website-assets.s3.amazonaws.com/user.png">
                <h3>${contact.name}</h3>
                <p>Email: ${contact.email}</p>
                <p>Phone: ${contact.phone}</p>
            `;
            contactList.appendChild(contactCard);
        });
    }

    fetch("https://my-cors-demo-website-assets.s3.amazonaws.com/data.json")
        .then(response => response.json())
        .then(data => createContactCards(data))
        .catch(error => console.error("Error fetching data:", error));
});
