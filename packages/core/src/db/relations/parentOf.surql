DEFINE TABLE OVERWRITE parentOf TYPE RELATION IN scope OUT scope SCHEMAFULL
    PERMISSIONS 
        FOR select WHERE in.workspace IN $auth->memberOf.out
        FOR create, delete WHERE in.workspace.owner = $auth;

    DEFINE FIELD OVERWRITE createdAt ON parentOf TYPE datetime DEFAULT time::now() READONLY;

DEFINE INDEX OVERWRITE unique_parent_child_idx ON parentOf FIELDS in, out UNIQUE;
