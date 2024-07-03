const CSharpOOP = () => {
    return (
        <section>
            <p className="project-text">The game's called ”Half Super Mario”, where there’s a hero (player) fighting with enemies, bugs and rescuing a princess. When the game is started, it will prompt the player to enter the player’s name, this is for storing the player’s record when the game is over</p>

            <p className="project-text">A player (Hero) has some atributes such as HP, Armour, Score, can move forward, backward and jump. Hero also has a Weapon (either a Sword or a Bow), by default it is a Sword.</p>

            <p className="project-text">A Bug or an Enemy is automatically spawned from the right side of the screen, moving towards the player. An Enemy has a Staff as its Weapon and can automatically spawn Fireballs to atack the player. If Hero is hit by a Bug, it loses 10 HP or 10 Armour if it has Armour, this value is 15 if the Hero is hit by a Fireball. The Fireball/Bug will disappear if it hits the Hero, the player will not earn any points from hiding a Bug that makes it disappear. Hero can use its Weapon to destroy these obstacles. Sword can destroy Bugs and Fireballs with 1 hit, but it needs to hit an Enemy twice to kill it. When an Enemy dies, all Fireballs that it has launched will disappear as well. The player will earn 5 points when killed a Bug and 10 points when killed an Enemy. Hero having Bow as its Weapon can launch Arrows to atack the opponents. An Arrow can kill a Bug, but it will be destroyed if hit by a Fireball. Unlike a Sword, an Arrow can kill an Enemy by 1 hit.</p>

            <p className="project-text">When the player’s Score hits 100, a Princess trapped in a Cage will appear, meaning the player’s mission now is to destroy the Cage and rescue the Princess. The Cage can only be hit by a Sword and Hero has to hit it 10 times to rescue the Princess. When the Princess is rescued, it will follow the Hero to enter the Final Round of the game, which is player has to achieve 300 points to win the game. A Princess also has a Weapon, which is a Wand that can randomly launch Spells for the Hero.</p>

            <p className="project-text">When the player wins or loses (HP {"<="} 0), the game will pause, prompt a message as above, along with the 5 most recent scores of the game including the current one, containing the players’ name and score. These records are stored in a text file by the program.</p>

            <p className="project-text">In summary, this game was designed to implement the 4 basic principles of Object Oriented Programming paradigm, with heavy concentrations on Inheritance and Polymorphism.</p>
        </section>
    );
};

export default CSharpOOP;