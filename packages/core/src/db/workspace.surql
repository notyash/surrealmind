DEFINE TABLE OVERWRITE workspace SCHEMAFULL
    PERMISSIONS
        FOR select WHERE owner = $auth OR id IN $auth->memberOf->workspace
        FOR create WHERE $auth != NONE
        FOR update WHERE owner = $auth
        FOR delete WHERE owner = $auth;

DEFINE FIELD OVERWRITE name ON workspace TYPE string ASSERT string::len($value) > 1;
DEFINE FIELD OVERWRITE logo ON workspace TYPE option<string | null>;
DEFINE FIELD OVERWRITE owner ON workspace TYPE record<user> DEFAULT $auth ASSERT record::exists($value);
DEFINE FIELD OVERWRITE createdAt ON workspace TYPE datetime DEFAULT time::now() READONLY;
