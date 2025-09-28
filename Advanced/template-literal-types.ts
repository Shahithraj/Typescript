type ReadPermissions = "no-read" | "read";

type WritePermissions = "no-write" | "write";

type ReadWritePermission = "no-read-no-write" | "no-read-write" | "read-no-write" | "read-write";

type ReadWriteLiteral = `${ReadPermissions}-${WritePermissions}` //  "no-read-no-write" | "no-read-write" | "read-no-write" | "read-write";