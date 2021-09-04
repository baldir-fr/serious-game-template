const CreateTaskHandler = (games, publish) => {
  const execute = ({gameId, taskId}) => games.find(gameId)?.createTask(taskId, publish);
  return {execute}
};

const MoveTaskHandler = (games, publish) => {
  const execute = ({gameId, taskId}) => games.find(gameId)?.moveTask(taskId, publish);
  return {execute}
};

module.exports = {CreateTaskHandler, MoveTaskHandler};