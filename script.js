
        //Define function
            function checkAnswers(){
                let score = 0;
            //assign the quiz elements to the quiz variable:
            quiz = document.forms.Quiz.elements;
            //assign the answer to the question to the answer1 variable:
            answer1 =quiz.diet.value;
            //check the answer to the first question
            if (answer1 == "Carnivorous"){
            //Add 1 to the score if the user is correct
            score = score + 1;
        }

        // Add code here to check the answers to the rest of your questions
        answer2 = quiz.lifespan.value;
            // Check the answer to the second question
            if (answer2 == "12 to 17 years"){
            // Add 1 to the score if the user was correct
            score = score +1;

        }
        // Display the score variable in an alert:
            alert ("Well done, your score was..." + score);
    }







