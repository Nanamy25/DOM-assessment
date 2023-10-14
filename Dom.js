const main = document.querySelector('main');
const jokeOne = "What did the horse say after it tripped? Help! I've fallen and I can't giddyup!";
const jokeTwo = "Why can't you hear a pterodactyl going to the bathroom? Because the 'P' is silent.";
const jokeThree = "What would bears be without bees? Ears."

const heading = "My Jokes"
const template = `
    <section>
        <ul>
            <li>${jokeOne}</li>
            <li>${jokeTwo}</li>
            <li>${jokeThree}</li>
        </ul>
    </section>
`;
main.innerHTML = template;  
const p = document.createElement('p');

p.textContent = "That's all folks!";
document.body.appendChild(p);