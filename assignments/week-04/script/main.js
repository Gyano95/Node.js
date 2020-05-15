// FORM SEARCH / 
const formSearch = document.forms["search"];
			const input = formSearch["searchInput"];
			input.placeholder = 'Search Here';
			formSearch.addEventListener ('submit', search, false);
				
			input.addEventListener('focus', function(){
				if (input.placeholder==='Search Here') {
					input.placeholder = 'Yes! Search Here!' 
				}
			}, false);
			
			input.addEventListener('blur', function(){
				if(input.value === '') {
				input.placeholder = "Are you still there ?";
				} 
			}, false);

  //SUPER HERO //
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);
function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

//Q U I Z Z  N I N J A //

const quiz = [
	{ name: "Superman",realName: "Clark Kent" },
	{ name: "Wonderwoman",realName: "Dianna Prince" },
	{ name: "Batman",realName: "Bruce Wayne" },
  form.heroName.addEventListener('keyup',disableSubmit,false);
  ];

  // View Object
  const view = {
	score: document.querySelector('#score strong'),
	question: document.getElementById('question'),
	result: document.getElementById('result'),
	info: document.getElementById('info'),
	start: document.getElementById('start'),
	render(target,content,attributes) {
		for(const key in attributes) {
		  target.setAttribute(key, attributes[key]);
		}
		target.innerHTML = content;
	},
	show(element){
	  element.style.display = 'block';
	},
	hide(element){
	  element.style.display = 'none';
	}
  }

	setup(){
	  this.show(this.question);
	  this.show(this.response);
	  this.show(this.result);
	  this.hide(this.start);
	  this.render(this.score,game.score);
	  this.render(this.result,'');
	  this.render(this.info,'');
	  this.resetForm();
	};

	resetForm(){
	  this.response.answer.value = '';
	  this.response.answer.focus();
  };
  
  teardown(){
	  this.hide(this.question);
	  this.hide(this.response);
	  this.show(this.start);
  };
  
  // Game Object
  const game = {
   start(quiz){
	  this.score = 0;
	  this.questions = [...quiz];
	  view.setup();
	  this.ask();
  }
}
	  // end of main game loop
	  this.gameOver();

   ask(name){
	  if(this.questions.length > 0) {
		  this.question = this.questions.pop();
		  const question = `What is ${this.question.name}'s real name?`;
		  view.render(view.question,question);
	  }
	  else {
		  this.gameOver();
	  }
	}

	check(response){
	  const answer = this.question.realName;
	  if(response === answer){
		view.render(view.result,'Correct!',{'class':'correct'});
		alert('Correct!');
		this.score++;
		view.render(view.score,this.score);
	  } else {
		view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
		alert(`Wrong! The correct answer was ${answer}`);
	  }
	  
	gameOver(){
	  view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
	  view.show(view.start);
	}

	gameOver(){
	  view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
	  view.teardown();
  }
  
  view.start.addEventListener('click', () => game.start(quiz), false);
  view.response.addEventListener('submit', (event) => game.check(event), false);
  view.hide(view.response);
  check(event){
	  event.preventDefault();
	  const response = view.response.answer.value;
	  const answer = this.question.realName;
	  if(response === answer){
		  view.render(view.result,'Correct!',{'class':'correct'});
		  this.score++;
		  view.render(view.score,this.score);
	  } else {
		  view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
	  }
	  view.resetForm();
	  this.ask();
  }
 }

