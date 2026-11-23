DEFINE TABLE OVERWRITE agent SCHEMAFULL
    PERMISSIONS
        FOR select WHERE workspace IN $auth->memberOf.out
        FOR create, update, delete WHERE workspace IN $auth->memberOf.out;

DEFINE FIELD OVERWRITE name ON agent TYPE string ASSERT string::len($value) > 0;
DEFINE FIELD OVERWRITE workspace ON agent TYPE record<workspace> ASSERT record::exists($value);
DEFINE FIELD OVERWRITE owner ON agent TYPE record<user> ASSERT record::exists($value);
DEFINE FIELD OVERWRITE scope ON agent TYPE record<scope> ASSERT record::exists($value);
DEFINE FIELD OVERWRITE model ON agent TYPE option<string>;
DEFINE FIELD OVERWRITE createdAt ON agent TYPE datetime DEFAULT time::now() READONLY;
DEFINE FIELD OVERWRITE tombstonedAt ON agent TYPE option<datetime>;

DEFINE INDEX OVERWRITE unique_workspace_agent_name ON agent FIELDS workspace, name UNIQUE;
