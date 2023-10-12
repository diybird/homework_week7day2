/* ------ PARTNERS ------*/

// Function to create partner image elements
function createPartnerImage(src, alt) {
    var li = document.createElement("li");
    li.className = "partner";
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    li.appendChild(img);
    return li;
}

// Function to add partner images to the partners list
function populatePartners() {
    var partnersList = document.getElementById("partners");

    // Define partner image data (src and alt attributes)
    var partnerData = [
        { src: "images/partners/partner-bustour.png", alt: "Partner Bus Tours" },
        { src: "images/partners/partner-cabinrental.png", alt: "Partner Cabin Rental" },
        { src: "images/partners/partner-campingadv.png", alt: "Partner Camping Adventure" },
        { src: "images/partners/partner-collegetours.png", alt: "Partner College Tours" },
        { src: "images/partners/partner-rentalbike.png", alt: "Partner Bike Rentals" },
        { src: "images/partners/partner-tourgroup.png", alt: "Partner Tour Group" }
    ];

    // Loop through the partner data and add images to the list
    partnerData.forEach(function (partner) {
        var partnerImage = createPartnerImage(partner.src, partner.alt);
        partnersList.appendChild(partnerImage);
    });
}

// Call the function to populate partner images
populatePartners();