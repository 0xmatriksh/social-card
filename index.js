// Get the canvas element
function createImage(title, description) {
    var canvas = document.getElementById("customImageCanvas");
    var context = canvas.getContext("2d");

    // Set the canvas size (e.g., 600x300 pixels)
    canvas.width = 600;
    canvas.height = 300;

    // Create a gradient background
    var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "#45b559"); // Set the left color as #34eb55
    gradient.addColorStop(0.25, "#45b559"); // Set the 30% point color as #34eb55
    gradient.addColorStop(0.25, "white"); // Set the 30% point color as white
    gradient.addColorStop(1, "white"); // Set the right color as white

    // Set the gradient as the background
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Set the title text properties
    context.fillStyle = "black"; // Set the title text color to #34eb55
    context.font = "bold 26px Arial"; // Set the title font and size

    // Add title text to the canvas
    var titleText = title; // Replace with your desired title text
    var titleTextWidth = context.measureText(titleText).width;
    var titleTextX = (canvas.width - titleTextWidth) / 2; // Center the title text horizontally
    var titleTextY = canvas.height / 2 - 35; // Position the title text vertically

    context.fillText(titleText, titleTextX, titleTextY); // Render the title text


    // Set the description text properties
    context.fillStyle = "black"; // Set the description text color to #34eb55
    context.font = "normal 16px Arial"; // Set the description font and size

    // Add description text to the canvas
    var maxWidth = 300; // Set the maximum width for the description text
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
    var descriptionTextY = canvas.height / 2 + 15 - ((lines.length - 1) * lineHeight) / 2; // Position the description text vertically

    for (var j = 0; j < lines.length; j++) {
        var descriptionText = lines[j];
        var descriptionTextWidth = context.measureText(descriptionText).width;
        var descriptionTextX = (canvas.width - descriptionTextWidth) / 2; // Center the description text horizontally

        context.fillText(descriptionText, descriptionTextX, descriptionTextY + j * lineHeight); // Render the description text
    }

    // Convert the canvas to a data URL
    var dataURL = canvas.toDataURL("image/jpeg");

    // Update the meta tag with the custom image
    var metaTag = document.querySelector('meta[property="twitter:image"]');
    metaTag.setAttribute("content", dataURL);

}





createImage("Investor from Nepal", "Dividend growth investing and how I grow dividend")

// Create the first canvas
var canvas1 = document.createElement('canvas');
canvas1.width = 150; // Specify the width of the first canvas
canvas1.height = 300; // Specify the height of the first canvas
var ctx1 = canvas1.getContext('2d');

// Draw on the first canvas (optional)
ctx1.fillStyle = '#45b559'; // Set the background color of the first canvas
ctx1.fillRect(0, 0, canvas1.width, canvas1.height);

// Create the second canvas
var canvas2 = document.createElement('canvas');
canvas2.width = 400; // Specify the width of the second canvas
canvas2.height = 300;// Specify the height of the second canvas
var ctx2 = canvas2.getContext('2d');

// Draw on the second canvas (optional)
ctx2.fillStyle = '#ffffff'; // Set the background color of the second canvas
ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

ctx2.fillStyle = "black"; // Set the title text color to #34eb55
ctx2.font = "bold 26px Arial"; // Set the title font and size

// Add title text to the canvas
var titleText = "title"; // Replace with your desired title text
var titleTextWidth = ctx2.measureText(titleText).width;
var titleTextX = (canvas2.width - titleTextWidth) / 2; // Center the title text horizontally
var titleTextY = canvas2.height / 2 - 15; // Position the title text vertically

ctx2.fillText(titleText, titleTextX, titleTextY); // Render the title text


// Set the description text properties
ctx2.fillStyle = "black"; // Set the description text color to #34eb55
ctx2.font = "italic 14px Arial"; // Set the description font and size

// Add description text to the canvas
var descriptionText = "description ctx2 ctx2ctx2ctx2ctx2ctx2ctx2ctx2 ctx2ctx2ctx2 Hello Hi Hello"; // Replace with your desired description text
var descriptionTextWidth = ctx2.measureText(descriptionText).width;
var descriptionTextX = (canvas2.width - descriptionTextWidth) / 2; // Center the description text horizontally
var descriptionTextY = canvas2.height / 2 + 15; // Position the description text vertically

ctx2.fillText(descriptionText, descriptionTextX, descriptionTextY); // Render the description text


// Create a larger canvas to merge the two canvas elements
var mergedCanvas = document.createElement('canvas');
mergedCanvas.width = canvas1.width + canvas2.width; // Specify the width of the merged canvas
mergedCanvas.height = Math.max(canvas1.height, canvas2.height); // Specify the height of the merged canvas
var ctxMerged = mergedCanvas.getContext('2d');

// Merge the two canvas elements onto the larger canvas
ctxMerged.drawImage(canvas1, 0, 0);
ctxMerged.drawImage(canvas2, canvas1.width, 0);

// Use the merged canvas as needed
// For example, you can append it to the document body:
document.body.appendChild(mergedCanvas);

