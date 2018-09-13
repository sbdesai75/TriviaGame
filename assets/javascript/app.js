var time = 20;
        var question = {
            q1: {
                'What is the capital of California?':
                    { 'a', 'b', 'c', 'd', }
            },
            q2: {
                'Which baseball team has won the most World Series titles?':
                { 'a': 'b'}
            }
        };
        var correctAnswers;
        var wrongAnswers;
        var intervalid;

        /*function*/

        console.log(question.q1['What does HTML stand for?'].a);
        function startGame() {

        }
        function gamePlay() {
            $('.startBtn').on('click', function () {
                //removes all buttons with the class startBtn
                $('button').remove('.startBtn');
                quest1();
            });
        }
        function quest1() {
            //Testing / Creates new Div and places it inside of btnContainer
            var newDiv = $('<div class=" quest q1');
            newDiv.html('testing');

            $('.btnContainer').append(newDiv);
            intervalid = setInterval(timecount, 1000);
        }
        function timeCount() {

        }