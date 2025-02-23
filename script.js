// Function to handle marque animation
function marqueAnimation(){

    // Add event listener for mouse wheel scroll
    window.addEventListener("wheel", function(dets){
        // Check if the scroll direction is downwards
        if(dets.deltaY > 0){
            // Animate the marque elements to move left
            gsap.to(".marque", {
                transform: "translateX(-200%)",
                duration: 4,
                repeat: -1,
                ease: "none"
            });

            // Rotate the images within marque elements
            gsap.to(".marque img", {
                rotate: 180
            });
        } else {
            // Animate the marque elements to move right
            gsap.to(".marque", {
                transform: 'translateX(0%)',
                duration: 4,
                repeat: -1,
                ease: "none"
            });

            // Reset the rotation of images within marque elements
            gsap.to(".marque img", {
                rotate: 0
            });
        }
    });

}

// Call the marqueAnimation function to initialize the animation
marqueAnimation();