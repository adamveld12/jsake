/**
 *  Task types
 *    Task: runs all dependent tasks in order before executing body
 *    ConcurrentTask: runs all dependent tasks in parallel before executing body
 *    DirectoryTask: creates a directory relative to root that matches the name of this task
 *
 *  Helpers
 *    Sh: execute a command in the shell
 *    Log: log a message to the shell
 *      Error: log an error - returns a non-zero status code if invoked
 *      Trace: log for debugging
 *
 **/
function ()
