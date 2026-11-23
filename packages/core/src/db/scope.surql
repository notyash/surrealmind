DEFINE TABLE OVERWRITE scope SCHEMAFULL
    PERMISSIONS
        FOR select WHERE workspace IN $auth->memberOf.out
        FOR create, update, delete WHERE workspace.owner = $auth;

DEFINE FIELD OVERWRITE name ON scope TYPE string ASSERT string::len($value) > 0;
DEFINE FIELD OVERWRITE path ON scope TYPE string VALUE string::lowercase($value) ASSERT string::len($value) > 0;
DEFINE FIELD OVERWRITE workspace ON scope TYPE record<workspace> ASSERT record::exists($value);
DEFINE FIELD OVERWRITE createdAt ON scope TYPE datetime DEFAULT time::now() READONLY;
DEFINE FIELD OVERWRITE tombstonedAt ON scope TYPE option<datetime>;

DEFINE INDEX OVERWRITE unique_workspace_scope_path ON scope FIELDS workspace, path UNIQUE;
