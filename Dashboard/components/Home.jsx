const React = require("react");
const client = require("../..");
const DefaultLayout = require("./Layout");

const Home = () => {
  return (
    <DefaultLayout title={`${client.user.username} Dashboard`}>
      <div>
        <h1>HELLO DUDE</h1>
      </div>
    </DefaultLayout>
  );
};

module.exports = Home;
