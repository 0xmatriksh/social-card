function createImage(title, description) {
    // var canvas = document.createElement("canvas");
    // canvas.id = "customImageCanvas";
    var canvas = document.getElementById("customImageCanvas")
    var context = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 330;

    // Create a gradient background
    var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "#5EBD71");
    gradient.addColorStop(0.3, "#5EBD71");
    gradient.addColorStop(0.3, "#ffffff");
    gradient.addColorStop(1, "#ffffff");

    // Set the gradient as the background
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Set the title text properties
    context.fillStyle = "#3f3e3e";
    context.font = "bold 30px Arial";

    // Add title text to the canvas
    var titleText = title; // Replace with your desired title text
    // var titleTextWidth = context.measureText(titleText).width;
    var titleTextX = 200; // Center the title text horizontally
    var titleTextY = canvas.height / 2 - 70; // Position the title text vertically

    context.fillText(titleText, titleTextX, titleTextY); // Render the title text

    // Set the description text properties
    context.fillStyle = "#3f3e3e"; // Set the description text color to #34eb55
    context.font = "normal 18px Arial"; // Set the description font and size

    // Add description text to the canvas
    var maxWidth = 350;
    var words = description.split(" ");
    var wrappedText = "";
    var line = "";
    for (var i = 0; i < words.length; i++) {
        var testLine = line + words[i] + " ";
        var testWidth = context.measureText(testLine).width;
        if (testWidth > maxWidth && i > 0) {
            wrappedText += line.trim() + "\n";
            line = words[i] + " ";
        } else {
            line = testLine;
        }
    }
    wrappedText += line.trim();

    // Add wrapped description text to the canvas
    var lines = wrappedText.split("\n");
    var lineHeight = 20; // Set the line height for the description text
    var descriptionTextY = titleTextY + 15; // Position the description text vertically

    for (var j = 0; j < lines.length; j++) {
        var descriptionText = lines[j];
        // var descriptionTextWidth = context.measureText(descriptionText).width;
        var descriptionTextX = 200;
        var descriptionTextY = descriptionTextY + lineHeight

        context.fillText(descriptionText, descriptionTextX, descriptionTextY); // Render the description text
    }

    context.roundRect(200, descriptionTextY + 30, 130, 45, 5);

    context.fillStyle = "#64CD79";
    context.fill();

    context.fillStyle = "#ffffff";
    context.font = "bold 18px Arial";

    context.fillText("Subscribe", 223, descriptionTextY + 60);

    // Add a circle in the green background part with image
    var circleRadius = 70; // Adjust the circle radius as desired
    var circleX = circleRadius + 20; // X coordinate of the circle's center
    var circleY = canvas.height / 2; // Y coordinate of the circle's center

    // Load a random image and draw it inside the circle
    var image = new Image();
    image.src = "https://pbs.twimg.com/profile_images/1621058982638125056/RVqpefv7_400x400.jpg"; // Replace with the source of your random image
    image.setAttribute("crossorigin", "anonymous")

    image.onload = function () {
        // Clip the rendering to the circle
        context.save();
        context.beginPath();
        context.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
        context.lineWidth = 10;
        context.strokeStyle = "#FAFCFC";
        context.stroke();
        context.clip();

        // Calculate the size and position of the image to fit inside the circle
        var imageWidth = circleRadius * 2;
        var imageHeight = circleRadius * 2;
        var imageX = circleX - circleRadius;
        var imageY = circleY - circleRadius;

        // Draw the image inside the circle
        context.drawImage(image, imageX, imageY, imageWidth, imageHeight);

        context.restore();

        // Convert the canvas to a data URL
        var dataURL = canvas.toDataURL("image/jpeg");
        console.log(dataURL)

        // Update the meta tag with the custom image
        var metaTag = document.querySelector('meta[property="twitter:image"]');
        metaTag.setAttribute("content", dataURL);
    };

}

createImage("Investor from Nepal", "Dividend growth investing and how I use dividend")

