function showDescription(treatment) {
    // Hide all descriptions
    const descriptions = document.querySelectorAll('.tab-description');
    descriptions.forEach(description => {
        description.classList.remove('active-tab-description');
    });

    // Show the clicked tab's description
    const selectedDescription = document.getElementById(`${treatment}-description`);
    selectedDescription.classList.add('active-tab-description');

    // Change the image based on the treatment
    let image = document.getElementById("treatmentImage");

    let images = {
        "icsi": "https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "imsi": "https://png.pngtree.com/thumb_back/fh260/background/20230615/pngtree-landscape-landscape-photo-image_2902263.jpg",
        "microchip": "https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "embryoscope": "https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg"
    };

    image.src = images[treatment];
}