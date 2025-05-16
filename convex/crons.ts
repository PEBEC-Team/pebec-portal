import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.cron(
  "dailyOrphanCleanup",
  "55 21 * * *",
  internal.cleanup.orphanUsersAndMdas
);


crons.cron(
  "monthlyAccessCodeGenerator",
  "0 1 1 * *",
  internal.users.generateMonthlyAccessCodeInternal
);

export default crons;
