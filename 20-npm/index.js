const https = require('node:https');
const term = require( 'terminal-kit' ).terminal;

const App = {
    users: [],

    setUsers(newUsers) {
        this.users = newUsers;
    },
    render() {
        term.clear();
        term.bold.underline('Users list:\n\n');

        this.users.forEach((user, index) => {
            term.green(`${index + 1}. `);
            term.bold(`${user.name}\n`);
            term.blue(`   Email:`)
            term(` ${user.email}\n`);
            term.blue(`   Website:`)
            term(` ${user.website}\n\n`);
        });
        // console.log(this.users);
    }
};

https.get('https://jsonplaceholder.typicode.com/users', (res) => {
    let data = '';

    res.on('data', (d) => {
        // process.stdout.write(d);
        data += d;
    });

    res.on('end', () => {
        const users = JSON.parse(data);
        // console.log('Users:', users);

        App.setUsers(users);
        App.render();
    });

}).on('error', (e) => {
  console.error(e);
});



