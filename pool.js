import pg from "pg"; import {config} from "../config.js";
export const pool=new pg.Pool({connectionString:config.databaseUrl,max:10,idleTimeoutMillis:30000,connectionTimeoutMillis:10000,ssl:process.env.NODE_ENV==="production"?{rejectUnauthorized:false}:undefined});
export const query=(text,params=[])=>pool.query(text,params);
