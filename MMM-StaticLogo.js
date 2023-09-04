Module.register("MMM-StaticLogo", {
  // Define module defaults
  defaults: {
    image: "modules/MMM-StaticLogo/tsmlogo.png", // Updated path to image
  },

  // Override dom generator.
  getDom: function () {
    var wrapper = document.createElement("div");
    var img = document.createElement("img");
    img.src = this.config.image; // Use the updated path
    img.alt = "Logo";
    img.style.width = "100px";
    img.style.height = "auto";
    
      img.style.background = "transparent"; // Add this line
  img.style.borderRadius = "50%";  // Add this line to crop the image into a circle
wrapper.appendChild(img);
    return wrapper;
  },
});
