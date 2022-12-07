// refactor to reasonable function
const fullTeam = ['Dagmar', 'Robin','Çhristian', 'Sebastian']
const team1 = []

for (let i = 0; i < 2; i++) {
    team1.push(...fullTeam.splice(Math.floor(Math.random() * fullTeam.length),1))
}

console.log(team1)

