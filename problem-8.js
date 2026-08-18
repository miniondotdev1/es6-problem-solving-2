// 

const buildProfileCard = (user) => {

    const { name, title, company } = user;

    return `${name}\n${title} at ${company}`

}

const user = {
    name: "Arif",
    title: "Developer",
    company: "Programming Hero"
}

console.log(buildProfileCard(user));