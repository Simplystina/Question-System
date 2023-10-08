const app = require("./app");

// write code an endpoint that fetches questions and its options from a database and sends to the client when a get request is made to the endpoint
app.get("/questions", async (req, res) => {
    // write code to fetch questions and its options from a database
    try {
        // write code to send response to the client
        const questions = await Question.find([
            {$sample: {size: 40}}
        ]).exec();
        const shuffledQuestions = shuffleArray(questions);
        res.join(shuffledQuestions);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
    // send response to the client
});

// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
