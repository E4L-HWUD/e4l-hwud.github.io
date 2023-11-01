const footerTemplate = `    
<!-- Footer -->
<footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
<a class="fa fa-instagram w3-hover-opacity" href="https://www.instagram.com/e4l_hwu/" style="text-decoration: none; color: white;" target="_blank"></a>
<a class="fa fa-twitter w3-hover-opacity" href="https://twitter.com/e4l_hwud" style="text-decoration: none; color: white;"><a>
<a class="fa fa-linkedin w3-hover-opacity" target="_blank" href="https://www.linkedin.com/company/engineers-for-life-hwud/" style="text-decoration: none; color: white;"></a>
<p class="w3-medium" style="color: white;">Created by <a href="https://www.linkedin.com/company/ulink-technologies/" target="_blank" class="w3-hover-text-green" style="color: white;">Aditya S | ULink Technologies</a></p>
<!-- End footer -->
</footer>
`;

const sideBarTemplate = `
<!-- Icon Bar (Sidebar - hidden on small screens) -->
<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
<!-- Avatar image in top left corner -->
<img src="logos/black1.png" style="width:100%" class="imagetop">
    <p style="background-color: black; margin-top: 0%; margin-bottom: 0%; padding-bottom: 10%; padding-top: 5%;">E4L</p>
    <a href="index.html" class="w3-bar-item w3-button w3-padding-large w3-black">
    <i class="fa fa-home w3-xxlarge"></i>
    <p>HOME</p>
    </a>
    <a href="index.html#about" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-id-card w3-xxlarge"></i>
    <p>ABOUT</p>
    </a>
    <a href="ourteam.html" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i class="fa fa-users w3-xxlarge"></i>
        <p>OUR TEAM</p>
    </a>
    <a href="gallery-2023-2024.html" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i class="fa fa-picture-o w3-xxlarge"></i>
        <p>PHOTOS</p>
    </a>
    <a href="contact.html" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i class="fa fa-envelope w3-xxlarge"></i>
        <p>CONTACT</p>
    </a>
    <a href="hackathon2023.html" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i class="fa fa-user-secret w3-xxlarge"></i>
        <p>HACKATHON</p>
    </a>
</nav>

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
<div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small" style="display: block; opacity: 100%;">
    <center><img src="logos/black1.png" style="width: 20%; padding-bottom: 4%;"></center>
    <a href="index.html" class="w3-bar-item w3-button">HOME</a>
    <a href="index.html#about" class="w3-bar-item w3-button" style="width:20% !important">ABOUT</a>
    <a href="ourteam.html" class="w3-bar-item w3-button" style="width:20% !important">OUR TEAM</a>
    <a href="gallery-2023-2024.html" class="w3-bar-item w3-button" style="width:20% !important">GALLERY</a>
    <a href="contact.html" class="w3-bar-item w3-button" style="width:20% !important">CONTACT</a>
    <a href="hackathon2023.html" class="w3-bar-item w3-button" style="width:20% !important">HACKATHON</a>
</div>
</div>
`;

function addPageelements() {
	document.getElementById("footer").innerHTML = footerTemplate; // Add the fookin footer
	document.getElementById("sidebar").innerHTML = sideBarTemplate; // Add the sus sidebar
}

addPageelements();
