DEFINE TABLE OVERWRITE memberOf TYPE RELATION IN user OUT workspace SCHEMAFULL
    PERMISSIONS 
        FOR select WHERE in = $auth OR out IN $auth->memberOf.out
        FOR create WHERE in = $auth OR out.owner = $auth
        FOR delete WHERE in = $auth OR out.owner = $auth;

    DEFINE FIELD OVERWRITE joinedAt ON memberOf TYPE datetime DEFAULT time::now() READONLY;
    DEFINE FIELD OVERWRITE rootScope ON memberOf TYPE record<scope> ASSERT record::exists($value);
    DEFINE FIELD OVERWRITE role ON memberOf TYPE string;

DEFINE INDEX OVERWRITE unique_membership_idx ON memberOf FIELDS in, out UNIQUE;
