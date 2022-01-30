const database = require("../config/database");
const query = require("../helper/query");
const redis = require("../config/redis");

exports.reset = async (table) => {
  const result = await query.execute(database, `select * from ${table}`);
  redis.set(table, JSON.stringify(result));
  return result;
};

exports.resetById = async (table, where) => {
  const result = await query.execute(
    database,
    `select * from ${table} where ${where}`
  );
  redis.set(`${table}?${where}`, JSON.stringify(result));
  return result;
};
